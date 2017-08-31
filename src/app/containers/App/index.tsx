import * as React from 'react';
const {PureComponent} = React;
import Helmet from 'react-helmet';


interface IProps {
  children: any;
}


class App extends PureComponent<IProps, null> {
  props: IProps;

  render() {
    return (
      <div>
        <Helmet defaultTitle="Big Market Place" titleTemplate="%s | Big Market Place"/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
