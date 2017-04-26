import * as React from 'react';
const {PureComponent, PropTypes} = React;


class Counter extends PureComponent<any, any> {
  static propTypes = {
    children: PropTypes.any,
  };

  static state = {
    counter: 0,
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    })
  };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  };

  render() {
    return (
      <div>
        <h1>Counter page</h1>

        <h3>{this.state.counter}</h3>

        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}


export default Counter;