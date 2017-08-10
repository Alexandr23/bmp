import * as React from 'react';
const {PureComponent} = React;

/* Styles */
const style = require('./style.less');
const classNames = require('classnames/bind');
export const cx = classNames.bind(style);


class Layout extends PureComponent<any, any> {
  render() {
    return (
      <div className={cx('layout')}>
        <div className={cx('header')}>
          <div className={cx('inner')}>
            header
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