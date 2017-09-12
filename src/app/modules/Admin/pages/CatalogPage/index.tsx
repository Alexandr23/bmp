import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Title, {Sizes} from '../../../../components/Title';
import CatalogCategoryTree from '../../components/CatalogCategoryTree';
import ProductList from '../../components/ProductList';
import {cx} from '../../components/LayoutAdmin';
import CatalogMain from '../../components/CatalogMain';
import {IState as IStore} from 'models/store';
import {ICatalogState, ICatalog} from '../../models/catalog';
import {catalogUpdate, catalogDelete} from '../../redux/catalog';
import {productListGet} from '../../redux/prodictList';

/* AntDesign */
import {Layout, Breadcrumb, Button, Input} from 'antd';
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
}


class CatalogPage extends PureComponent<IProps, IState> {
  props: IProps;
  state: IState;

  constructor (props) {
    super(props);

    this.state = {
      isProductAdd: false,
    };
  }

  toggleProductAdd = () => {
    this.setState({isProductAdd: !this.state.isProductAdd});
  };

  componentDidMount () {
    this.props.productListGet();
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
                <Button size="small" type="primary" icon="plus" ghost>Добавить</Button>
              </div>

              <div className={cx('content__body')}>
                <Search style={{'marginBottom': '20px'}} onSearch={value => console.log(value)} />

                <CatalogCategoryTree tree={{}} />
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