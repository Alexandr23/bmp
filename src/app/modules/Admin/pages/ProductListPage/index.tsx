import * as React from 'react';
const {PureComponent} = React;
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {IState as IStore} from 'models/store';
import ProductList from '../../components/ProductList';
import {cx} from '../../components/LayoutAdmin';
import {IProductListState} from "../../models/product";

/* AntDesign */
import {Layout, Breadcrumb, Button} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;


interface IProps {
  children: any;
  productList: IProductListState;
}


class ProductListPage extends PureComponent<IProps> {
  render() {
    return (
      <Layout className={cx('main')}>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Товары</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Товары</h1>
            <Link to="/admin/product/create">
              <Button type="primary" icon="plus" ghost>Создать товар</Button>
            </Link>
          </div>

          <div className={cx('content__body')}>
            <ProductList productList={this.props.productList} />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default (connect as any)((state: IStore) => ({
  productList: state.admin.productList,
}))(ProductListPage);