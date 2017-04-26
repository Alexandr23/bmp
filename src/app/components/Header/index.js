import React, {Component} from 'react';
import {Link} from 'react-router';
import './style.less';

class Header extends Component {
  render () {
    return (
      <div className="header header_bg">
        <div className="inner">
          <Link className="link link_left" to="/">Big Market Place</Link>
          <Link className="link link_right" to="/about">About</Link>
          <Link className="link link_right" to="/counter">Counter</Link>
        </div>
      </div>
    );
  }
}

export default Header;