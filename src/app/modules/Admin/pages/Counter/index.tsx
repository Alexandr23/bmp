import * as React from 'react';
const {PureComponent} = React;
import {Layout, Breadcrumb} from 'antd';
const {Content} = Layout;
const BreadcrumbItem = Breadcrumb.Item;
import {cx} from '../../components/LayoutAdmin';


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
        <Breadcrumb className={cx('breadcrumb')}>
          <BreadcrumbItem>Счетчик</BreadcrumbItem>
        </Breadcrumb>

        <Content className={cx('content')}>
          <h1 className={cx('title')}>Счетчик 2</h1>

          <h3>{this.state.counter}</h3>

          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.increment}>Increment</button>
        </Content>
      </div>
    );
  }
}


export default Counter;
