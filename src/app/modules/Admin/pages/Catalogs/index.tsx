import * as React from 'react';
import {Link} from 'react-router';
const {PureComponent} = React;
import {Layout, Breadcrumb, Button} from 'antd';
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
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Каталоги</h1>
            <Link to="/admin/catalog/create">
              <Button type="primary" icon="plus" ghost>Создать каталог</Button>
            </Link>
          </div>

          <div className={cx('content__body')}>
            <CatalogList />
          </div>
        </Content>
      </div>
    );
  }
}

export default Catalogs;