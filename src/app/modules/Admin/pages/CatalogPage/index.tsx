import * as React from 'react';
const {PureComponent} = React;
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Title, {Sizes} from '../../../../components/Title';
import CatalogForm from '../../components/CatalogForm';
import CatalogCategoryTree from '../../components/CatalogCategoryTree';
import ProductList from '../../components/ProductList';
import {cx} from '../../components/LayoutAdmin';
import {IState as IStore} from 'models/store';
import {ICatalogState, ICatalog} from '../../models/catalog';
import {catalogUpdate, catalogDelete} from '../../redux/catalog';
import {productListGet} from '../../redux/prodictList';

/* AntDesign */
import {Layout, Breadcrumb, message, Button, Popconfirm, Input, Modal} from 'antd';
const {Content, Sider} = Layout;
const {Search} = Input;
const BreadcrumbItem = Breadcrumb.Item;


interface IProps {
  children: any;
  catalog: ICatalogState;
  catalogUpdate: (id: string, data: any) => any;
  catalogDelete: (id: string) => any;
  productListGet: () => any;
}

interface IState {
  isProductAdd: boolean;
  isEditModal: boolean;
}


class CatalogPage extends PureComponent<IProps, IState> {
  props: IProps;
  state: IState;

  constructor (props) {
    super(props);

    this.state = {
      isProductAdd: false,
      isEditModal: false,
    };
  }

  editModalOpen = () => {
    this.setState({isEditModal: true});
  };

  editModalClose = () => {
    this.setState({isEditModal: false});
  };

  toggleProductAdd = () => {
    this.setState({isProductAdd: !this.state.isProductAdd});
  };

  componentDidMount () {
    this.props.productListGet();
  }

  catalogUpdate = (data: any) => {
    const dataPrepared = {data: {attributes: data}};

    this.props.catalogUpdate(this.props.catalog.data.id, dataPrepared)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Изменения каталога сохранены.');
        } else {
          message.error('Ошибка сохранения.');
        }
      });
  };

  catalogDelete = () => {
    this.props.catalogDelete(this.props.catalog.data.id)
      .then((res:any) => {
        if (res && res.payload && !res.payload.error) {
          message.success('Каталог удален.');
          browserHistory.push('/admin/catalog/list');
        } else {
          message.error('Ошибка удаления.');
        }
      });
  };

  render() {
    const isLoaded = this.props.catalog.isLoaded;
    const catalog:ICatalog = isLoaded ? this.props.catalog.data : {};

    return (
      <Layout className={cx('main')}>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/catalog/list">Каталоги</Link></BreadcrumbItem>
          <BreadcrumbItem>{isLoaded ? catalog.attributes.name : ''}</BreadcrumbItem>
        </Breadcrumb>

        <div style={{background: '#fff', marginBottom: '10px',}}>
          <Content className={cx('content')}>
            <div className={cx('content__header')}>
              <Title size={Sizes.h1}>Каталог "{isLoaded ? catalog.attributes.name : ''}"</Title>
              <div>
                <Button size="small" style={{marginRight: '10px'}} type="primary" icon="edit" ghost onClick={this.editModalOpen}>Редактировать каталог</Button>

                <Modal
                  title="Vertically centered modal dialog"
                  wrapClassName="vertical-center-modal"
                  visible={this.state.isEditModal}
                  onCancel={this.editModalClose}
                  onOk={this.catalogUpdate}
                  okText="Сохранить"
                >
                  <CatalogForm catalog={this.props.catalog} onSubmit={this.catalogUpdate} />
                </Modal>

                <Popconfirm title="Удалить каталог?" onConfirm={this.catalogDelete} okText="Удалить" cancelText="Отмена" okType="danger">
                  <Button size="small" type="danger" icon="delete" ghost>Удалить каталог</Button>
                </Popconfirm>
              </div>
            </div>
          </Content>
        </div>

        <Layout>
          <Sider className={cx('sider')}>
            <Content className={cx('content')}>
              <div className={cx('content__header')}>
                <Title size={Sizes.h3}>Категории</Title>
                <Button size="small" type="primary" icon="plus" ghost>Добавить</Button>
              </div>

              <div className={cx('content__body')}>
                <Search style={{'marginBottom': '20px'}} onSearch={value => console.log(value)} />

                <CatalogCategoryTree />
              </div>
            </Content>
          </Sider>

          <Layout>
            <Content className={cx('content')}>
              <div className={cx('content__header')}>
                <Title size={Sizes.h3}>Товары</Title>
                {!this.state.isProductAdd && <Button size="small" type="primary" icon="plus" ghost onClick={this.toggleProductAdd}>Добавить товары в категорию</Button>}
                {this.state.isProductAdd && (
                 <div>
                   <Button  style={{'marginRight': '10px'}} size="small" type="primary" ghost onClick={this.toggleProductAdd}>Отменить</Button>
                   <Button size="small" type="primary" onClick={this.toggleProductAdd}>Сохранить изменения</Button>
                 </div>
                )}
              </div>

              <div className={cx('content__body')}>
                <div style={{display: 'flex'}}>
                  <div style={{width: '100%'}}>
                    <Search style={{'marginBottom': '20px'}} onSearch={value => console.log(value)} />
                    <ProductList />
                  </div>
                  {this.state.isProductAdd && <div style={{width: '100%', marginLeft: '24px'}}>
                    <Search style={{'marginBottom': '20px'}} onSearch={value => console.log(value)} />
                    <ProductList />
                  </div>}
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default (connect as any)((state: IStore) => ({
  catalog: state.admin.catalog,
}), {catalogUpdate, catalogDelete, productListGet})(CatalogPage);