import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
const reduxAsyncConnect = require('redux-connect').reducer;


/* Modules */
import StoreReducer from '../modules/Store/redux/index';
import AdminReducer from '../modules/Admin/redux/index';


export default combineReducers({
  reduxAsyncConnect,
  routing,
  store: StoreReducer,
  admin: AdminReducer,
});
