import * as React from 'react';
const {PureComponent} = React;
import {Layout, Breadcrumb, Button} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import CatalogList from '../../components/CatalogList';

/* Styles from AdminLayout */
const style = require('../../components/LayoutAdmin/style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


import {createCatalog} from '../../api/catalog';


interface IProps {
  children: any;
}


class Catalogs extends PureComponent<IProps, null> {
  createCatalog = () => {
    console.log('create');
    createCatalog();
  };

  render() {
    return (
      <div>
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Каталоги</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <div className={cx('content__header')}>
            <h1 className={cx('title')}>Каталоги</h1>
            <Button type="primary" icon="plus" ghost onClick={this.createCatalog}>Создать каталог</Button>
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