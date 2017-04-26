import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';

const logger = createLogger();

const configureStore = (preloadedState: any) => {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, logger, routerMiddleware(browserHistory)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    ),
  );
};

export default configureStore;
