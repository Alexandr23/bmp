import * as React from 'react';
const {PureComponent} = React;
import {LocaleProvider} from 'antd';
import * as ruRU from 'antd/lib/locale-provider/ru_RU';
import Header from '../Header';
import Footer from '../Footer';
import './style.less';


class Layout extends PureComponent<any, any> {
  render () {
    return (
      <LocaleProvider locale={ruRU}>
        <div className="layout">
          <Header />

          <div className="content">
            <div className="inner">
              {this.props.children}
            </div>
          </div>

          <Footer />
        </div>
      </LocaleProvider>
    );
  }
}

export default Layout;