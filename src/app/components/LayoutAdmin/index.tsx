import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import * as classNames from 'classnames';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Footer, Content, Sider} = Layout;

import {LocaleProvider} from 'antd';
import * as ruRU from 'antd/lib/locale-provider/ru_RU';
import 'antd/dist/antd.less';
const style = require('./style.less');
const cx = classNames.bind(style);

class LayoutAdmin extends PureComponent<any, any> {
  onSelect = () => {

  }


  render() {
    console.log(style.layout);

    return (
      <LocaleProvider locale={ruRU}>
        <Layout className={cx('layout')}>
          <Header className="header">
            <div className="logo"/>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>

          <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="user" />Каталог</span>}>
                  <Menu.Item key="1">Категории</Menu.Item>
                  <Menu.Item key="2">Товары</Menu.Item>
                  <Menu.Item key="3">Атрибуты</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />Пользователи</span>}>
                  <Menu.Item key="4">Покупатели</Menu.Item>
                  <Menu.Item key="5">Продавцы</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                {this.props.children}
              </Content>
            </Layout>
          </Layout>

          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </LocaleProvider>
    );
  }
}

export default LayoutAdmin;