import * as React from 'react';
const {PureComponent} = React;
import LayoutAdmin from '../../components/LayoutAdmin';


interface IProps {
  children: any;
}


class Admin extends PureComponent<IProps, null> {
  render() {
    return (
      <LayoutAdmin>{this.props.children}</LayoutAdmin>
    );
  }
}

export default Admin;
