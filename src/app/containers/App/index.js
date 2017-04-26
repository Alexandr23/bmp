import React, {PureComponent, PropTypes} from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/Layout';


export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <Helmet defaultTitle="Big Market Place" titleTemplate="%s | Big Market Place" />
        <Layout>{this.props.children}</Layout>
      </div>
    );
  }
}
