import * as React from 'react';
import {Link} from 'react-router';
const {PureComponent} = React;

/* AntDesign */
import {Layout, LocaleProvider} from 'antd';
const ruRU = require('antd/lib/locale-provider/ru_RU.js');
const {Header, Footer, Sider} = Layout;

import 'antd/dist/antd.less';
import MenuAdmin from '../MenuAdmin';

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


class LayoutAdmin extends PureComponent<any, any> {
  props: any;

  render() {
    return (
      <LocaleProvider locale={ruRU}>
        <Layout className={cx('layout')}>
          <Header className={cx('header')}>
            <Link to="/"><div className={cx('logo')} /></Link>
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