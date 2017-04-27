import * as React from 'react';
const {PureComponent} = React;


class Counter extends PureComponent<any, any> {
  public state = {
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

  public render() {
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