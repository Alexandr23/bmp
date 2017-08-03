import * as React from 'react';
const {PureComponent} = React;
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CategoryList from '../../components/CategoryList';
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
          <h1>Товары</h1>
          <CategoryList />
        </Content>
      </div>
    );
  }
}

export default Products;