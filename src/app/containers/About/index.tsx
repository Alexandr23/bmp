import * as React from 'react';
const {PureComponent, PropTypes} = React;
import Table from '../../components/Table';


export default class About extends PureComponent<any, any> {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <h1>About page</h1>
        <Table />
      </div>
    );
  }
}
