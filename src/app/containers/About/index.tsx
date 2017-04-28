import * as React from 'react';
const {PureComponent, PropTypes} = React;
import Catalog from '../../components/Catalog';


export default class About extends PureComponent<any, any> {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <h1>About page</h1>
        <Catalog />
      </div>
    );
  }
}
