import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CategoryForm from '../../components/CategoryForm';
import {cx} from '../../components/LayoutAdmin';


interface IProps {
  children: any;
}


class Category extends PureComponent<IProps, null> {
  componentWillMount () {

  }

  render() {
    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталог</BreadcrumbItem>
          <BreadcrumbItem><Link to="/admin/categories">Категории товаров</Link></BreadcrumbItem>
          <BreadcrumbItem>Печенье</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <h1 className={cx('title')}>Категория "Печенье"</h1>

          <CategoryForm />
        </Content>
      </div>
    );
  }
}

export default Category;