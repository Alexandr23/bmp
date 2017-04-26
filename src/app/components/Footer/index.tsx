import * as React from 'react';
const {PureComponent} = React;
import './style.less';

class Footer extends PureComponent<any, any> {
  render () {
    return (
      <div className="footer">
        <div className="author">Никифоров Александр</div>
      </div>
    );
  }
}

export default Footer;