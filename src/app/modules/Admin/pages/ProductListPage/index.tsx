import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import ProductList from '../../components/ProductList';
import {cx} from '../../components/LayoutAdmin';

/* AntDesign */
import {Layout, Breadcrumb, Button} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;


interface IProps {
  children: any;
}


class ProductListPage extends PureComponent<IProps, null> {
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
            <ProductList />
          </div>
        </Content>
      </Layout>
    );
  }
}

export default ProductListPage;