import * as React from 'react';
const {PureComponent} = React;
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CategoryList from '../../components/CategoryList';

/* Styles from AdminLayout */
const style = require('../../components/LayoutAdmin/style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  children: any;
}


class Categories extends PureComponent<IProps, null> {
  render() {
    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталог</BreadcrumbItem>
          <BreadcrumbItem>Категории товаров</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Категории товаров</h1>
          </div>

          <div className={cx('content__body')}>
            <CategoryList />
          </div>
        </Content>
      </div>
    );
  }
}

export default Categories;