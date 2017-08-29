import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './root';
import '../app/styles/main.less';


const render = (Component:any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};


render(Root);


if ((module as any).hot) {
    (module as any).hot.accept('./root', () => {
      const RootNew = require('./root').default;
      render(RootNew);
    });
}

