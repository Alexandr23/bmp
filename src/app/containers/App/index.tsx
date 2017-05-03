import * as React from 'react';
const {PureComponent, PropTypes} = React;
import Helmet from 'react-helmet';
import LayoutAdmin from '../../components/LayoutAdmin';


export default class App extends PureComponent<any, any> {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <Helmet defaultTitle="Big Market Place" titleTemplate="%s | Big Market Place"/>
        <LayoutAdmin>{this.props.children}</LayoutAdmin>
      </div>
    );
  }
}
