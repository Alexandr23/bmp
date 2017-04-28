import * as React from 'react';
const {PureComponent} = React;


interface IProps {

}
interface IState {
  counter: number;
}


class Counter extends PureComponent<IProps, IState> {
  constructor (props: IProps) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

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