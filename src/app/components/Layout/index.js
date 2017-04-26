import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './style.less';


class Layout extends Component {
  render () {
    return (
      <div className="layout">
        <Header />

        <div className="content">
          <div className="inner">
            {this.props.children}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Layout;