import React, {Component} from 'react';
import {Link} from 'react-router';
import './style.less';

class Header extends Component {
  render () {
    return (
      <div className="header header_bg">
        <Link className="header__link" to="/">Big Market Place</Link>
        <Link className="header__link header__link_right" to="/about">About</Link>
      </div>
    );
  }
}

export default Header;