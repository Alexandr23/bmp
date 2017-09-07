import * as React from 'react';
const {PureComponent} = React;
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Location} from 'history';
import {cx} from '../LayoutAdmin';
import {ENTITY} from '../../../../constants/entity';

/* AntDesign */
import {Menu} from 'antd';
import {IState} from "../../../../models/store";
const MenuItem = Menu.Item;


interface IProps {
  location: Location;
}


class MenuAdmin extends PureComponent<IProps, any> {
  props: IProps;

  render() {
    let currentEntity = ENTITY.catalog;
    Object.keys(ENTITY).forEach(key => {
      currentEntity = this.props.location.pathname.indexOf(ENTITY[key]) !== -1 ? ENTITY[key] : currentEntity;
    });

    return (
      <Menu
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys={[currentEntity]}
        className={cx('menu')}
      >
        <MenuItem key={ENTITY.catalog}><Link to="/admin/catalog/list">Каталоги</Link></MenuItem>
        <MenuItem key={ENTITY.product}><Link to="/admin/product/list">Товары</Link></MenuItem>
        <MenuItem key={ENTITY.category}><Link to="/admin/category/list">Категории</Link></MenuItem>
      </Menu>
    );
  }
}

export default (connect as any)((state: IState) => ({
  location: state.routing.locationBeforeTransitions,
}))(MenuAdmin);