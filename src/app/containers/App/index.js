import {PureComponent, PropTypes} from 'react';
import Helmet from 'react-helmet';


export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <Helmet defaultTitle="Big Market Place" titleTemplate="%s | Big Market Place" />
        {this.props.children}
      </div>
    );
  }
}
