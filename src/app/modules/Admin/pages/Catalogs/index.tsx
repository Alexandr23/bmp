import * as React from 'react';
const {PureComponent} = React;
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CatalogList from '../../components/CatalogList';

/* Styles from AdminLayout */
const style = require('../../components/LayoutAdmin/style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


interface IProps {
  children: any;
}


class Catalogs extends PureComponent<IProps, null> {
  render() {
    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталоги</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <h1 className={cx('title')}>Каталоги</h1>
          <CatalogList />
        </Content>
      </div>
    );
  }
}

export default Catalogs;