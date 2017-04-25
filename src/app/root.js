import React, {PropTypes} from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from './routes';

const Root = ({store, history, routeKey}) => (
  <Provider store={store}>
    <Router history={history} routes={routes} key={routeKey} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired,
};

export default Root;
