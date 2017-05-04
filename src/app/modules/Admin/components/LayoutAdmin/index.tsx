import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Footer, Content, Sider} = Layout;
import {LocaleProvider} from 'antd';
import * as ruRU from 'antd/lib/locale-provider/ru_RU';
import 'antd/dist/antd.less';

const style = require('./style.less');
const classNames = require('classnames/bind');
const cx = classNames.bind(style);


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
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                className={cx('menu')}
              >
                <SubMenu key="sub1" title={<span><Icon type="appstore-o" />Каталог</span>}>
                  <Menu.Item key="catalog"><Link to="/admin/catalog">Категории</Link></Menu.Item>
                  <Menu.Item key="counter"><Link to="/counter">Товары</Link></Menu.Item>
                  <Menu.Item key="attributes/"><Link to="/">Атрибуты</Link></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="user" />Пользователи</span>}>
                  <Menu.Item key="4">Покупатели</Menu.Item>
                  <Menu.Item key="5">Продавцы</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout className={cx('main')}>
              <Breadcrumb className={cx('breadcrumb')}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{'sdf'}</Breadcrumb.Item>
              </Breadcrumb>

              <Content className={cx('content')}>
                {this.props.children}
              </Content>
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