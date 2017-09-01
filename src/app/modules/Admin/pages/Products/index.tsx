import * as React from 'react';
const {PureComponent} = React;
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import ProductList from '../../components/ProductList';
import {cx} from '../../components/LayoutAdmin';


interface IProps {
  children: any;
}


class Products extends PureComponent<IProps, null> {
  render() {
    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталог</BreadcrumbItem>
          <BreadcrumbItem>Товары</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Товары</h1>
          </div>

          <div className={cx('content__body')}>
            <ProductList />
          </div>
        </Content>
      </div>
    );
  }
}

export default Products;