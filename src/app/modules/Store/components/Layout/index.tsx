import * as React from 'react';
import {Link} from 'react-router';
const {PureComponent} = React;

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


class Layout extends PureComponent<any, any> {
  props: any;

  render() {
    return (
      <div className={cx('layout')}>
        <div className={cx('header')}>
          <div className={cx('header__inner')}>
            <Link to="/admin"><div className={cx('logo')} /></Link>
          </div>
        </div>

        <div className={cx('content')}>
          <div className={cx('inner')}>
            {this.props.children}
          </div>
        </div>

        <div className={cx('footer')}>
          <div className={cx('inner')}>
            footer
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;