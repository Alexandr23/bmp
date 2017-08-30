import * as React from 'react';
const {PureComponent} = React;

/* AntDesign */
import {Layout, LocaleProvider} from 'antd';
import en_US from 'antd/lib/locale-provider/en_US';
const {Header, Footer, Sider} = Layout;

import 'antd/dist/antd.less';
import MenuAdmin from '../MenuAdmin';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


class LayoutAdmin extends PureComponent<any, any> {
  render() {
    return (
      <LocaleProvider locale={en_US}>
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
            © 2017 KDV. Mag Development
          </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default LayoutAdmin;