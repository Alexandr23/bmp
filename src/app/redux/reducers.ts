import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {CatalogReducer} from 'redux/modules/catalog';
const reduxAsyncConnect = require('redux-connect').reducer;

export default combineReducers({
  reduxAsyncConnect,
  routing,
  catalog: CatalogReducer,
});
