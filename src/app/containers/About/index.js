import React, {PureComponent, PropTypes} from 'react';


export default class About extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <h1>About page</h1>
      </div>
    );
  }
}
