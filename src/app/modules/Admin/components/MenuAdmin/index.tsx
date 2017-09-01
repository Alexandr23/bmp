import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
import {cx} from '../LayoutAdmin'


class MenuAdmin extends PureComponent<any, any> {
  render() {
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['catalog']}
        defaultOpenKeys={['users']}
        className={cx('menu')}
      >
        <MenuItem key="catalog"><Link to="/admin/catalogs">Каталог</Link></MenuItem>
        <MenuItem key="products"><Link to="/admin/products">Товары</Link></MenuItem>
        <MenuItem key="categories"><Link to="/admin/categories">Категории</Link></MenuItem>

        {/*<SubMenu key="users" title={<span><Icon type="user" /><span>Пользователи</span></span>}>
          <MenuItem key="4">Покупатели</MenuItem>
          <MenuItem key="5">Продавцы</MenuItem>
        </SubMenu>*/}
      </Menu>
    );
  }
}

export default MenuAdmin;