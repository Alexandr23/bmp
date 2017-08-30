import * as React from 'react';
const {PureComponent} = React;


interface IProps {
  children: any;
}


class Shop extends PureComponent<IProps, null> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Shop;
