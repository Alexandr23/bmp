import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Title, {Sizes} from '../../../../components/Title';
import CatalogCategoryTree from '../../components/CatalogCategoryTree';
import ProductList from '../../components/ProductList';
import {cx} from '../../components/LayoutAdmin';
import CatalogMain from '../../components/CatalogMain';
import CategoryCreateModal from '../../features/CategoryCreateModal';
import {IState as IStore} from 'models/store';
import {ICatalogState, ICatalog} from '../../models/catalog';
import {ICategoryListState} from "../../models/category";
import {IProductListState} from "../../models/product";
import {catalogUpdate, catalogDelete} from '../../redux/catalog';
import {productListGet} from '../../redux/prodictList';
import {categoryListGet} from '../../redux/categoryList';

/* AntDesign */
import {Layout, Breadcrumb, Button, Input, Modal} from 'antd';
const {Content, Sider} = Layout;
const {Search} = Input;
const BreadcrumbItem = Breadcrumb.Item;


interface IProps {
  children: any;
  catalog: ICatalogState;
  categoryList: ICategoryListState;
  productList: IProductListState;
  catalogUpdate: (id: string, data: any) => any;
  catalogDelete: (id: string) => any;
  categoryListGet: (params: any) => any;
  productListGet: () => any;
}

interface IState {
  isProductAdd: boolean;
  isCategoryCreateModal: boolean;
}


class CatalogPage extends PureComponent<IProps, IState> {
  constructor (props) {
    super(props);

    this.state = {
      isProductAdd: false,
      isCategoryCreateModal: false,
    };
  }

  toggleProductAdd = () => this.setState({isProductAdd: !this.state.isProductAdd});

  categoryCreateModalOpen = () => this.setState({isCategoryCreateModal: true});
  categoryCreateModalClose = () => this.setState({isCategoryCreateModal: false});

  onCategoryCreate = () => {
    this.categoryCreateModalClose();
    this.props.categoryListGet({filter: this.props.catalog.data.id});
  };

  componentDidMount () {
    const {list} = this.props.categoryList;

    if (list.length) {
      this.props.productListGet();
    }
  }

  render() {
    const {catalog, catalogDelete, catalogUpdate} = this.props;
    const isLoaded = this.props.catalog.isLoaded;

    return (
      <Layout className={cx('main')}>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem><Link to="/admin/catalog/list">Каталоги</Link></BreadcrumbItem>
          <BreadcrumbItem>{isLoaded ? catalog.data.attributes.name : ''}</BreadcrumbItem>
        </Breadcrumb>

        <div style={{background: '#fff', marginBottom: '10px',}}>
          <CatalogMain catalog={catalog} catalogUpdate={catalogUpdate} catalogDelete={catalogDelete} />
        </div>

        <Layout>
          <Sider className={cx('sider')}>
            <Content className={cx('content')}>
              <div className={cx('content__header')}>
                <Title size={Sizes.h3}>Категории</Title>
                <Button size="small" type="primary" icon="plus" ghost onClick={this.categoryCreateModalOpen}>Добавить</Button>
                {this.state.isCategoryCreateModal && <CategoryCreateModal onCancel={this.categoryCreateModalClose} onCreate={this.onCategoryCreate} />}
              </div>

              <div className={cx('content__body')}>
                {this.props.categoryList.list.length ? <CatalogCategoryTree categoryList={this.props.categoryList} /> : 'Нет категорий'}
              </div>
            </Content>
          </Sider>

          <Layout>
            <Content className={cx('content')}>
              <div className={cx('content__header')}>
                <Title size={Sizes.h3}>Товары категории</Title>
                {!this.state.isProductAdd && <Button size="small" type="primary" icon="plus" ghost onClick={this.toggleProductAdd}>Добавить товары в категорию</Button>}
              </div>

              <div className={cx('content__body')}>
                <div style={{display: 'flex'}}>
                  <div style={{width: '100%'}}>
                    <Search style={{'marginBottom': '20px'}} onSearch={value => console.log(value)} />
                    <ProductList productList={this.props.productList} />
                  </div>
                </div>
              </div>
            </Content>
          </Layout>

          {this.state.isProductAdd && <Layout style={{borderLeft: '1px solid #ececec'}}>
            <Content className={cx('content')}>
              <div className={cx('content__header')}>
                <Title size={Sizes.h3}>Все товары</Title>
                {this.state.isProductAdd && <div>
                  <Button  style={{'marginRight': '10px'}} size="small" type="primary" ghost onClick={this.toggleProductAdd}>Отменить</Button>
                  <Button size="small" type="primary" onClick={this.toggleProductAdd}>Сохранить изменения</Button>
                </div>}
              </div>

              <div className={cx('content__body')}>
                <div style={{display: 'flex'}}>
                  <div style={{width: '100%'}}>
                    <Search style={{'marginBottom': '20px'}} onSearch={value => console.log(value)} />
                    <ProductList productList={this.props.productList} />
                  </div>
                </div>
              </div>
            </Content>
          </Layout>}
        </Layout>
      </Layout>
    );
  }
}

export default (connect as any)((state: IStore) => ({
  catalog: state.admin.catalog,
  categoryList: state.admin.categoryList,
  productList: state.admin.productList,
}), {catalogUpdate, catalogDelete, productListGet, categoryListGet})(CatalogPage);