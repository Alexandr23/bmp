import * as React from 'react';
const {PureComponent} = React;

/* AntDesign */
import {Layout, LocaleProvider} from 'antd';
const {Header, Footer, Sider} = Layout;
import ruRU from 'antd/lib/locale-provider/ru_RU';
import 'antd/dist/antd.less';
import MenuAdmin from '../MenuAdmin';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


class LayoutAdmin extends PureComponent<any, any> {
  render() {
    return (
      <LocaleProvider locale={ruRU}>
        <Layout className={cx('layout')}>
          <Header className={cx('header')}>
            <div className={cx('logo')} />
          </Header>

          <Layout>
            <Sider className={cx('sider')}>
              <MenuAdmin />
            </Sider>

            <Layout className={cx('main')}>
              {this.props.children}
            </Layout>
          </Layout>

          <Footer className={cx('footer')}>
            © 2017 KDV. Created by Alexandr Nikiforov
          </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default LayoutAdmin;