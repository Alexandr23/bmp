import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {CategoryListReducer} from './modules/categoryList';
import {CategoryReducer} from './modules/category';
import {CatalogReducer} from './modules/catalog';
const reduxAsyncConnect = require('redux-connect').reducer;

export default combineReducers({
  reduxAsyncConnect,
  routing,
  categoryList: CategoryListReducer,
  category: CategoryReducer,
  catalog: CatalogReducer,
});
