import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {CategoryListReducer} from 'redux/modules/categoryList';
import {CategoryReducer} from 'redux/modules/category';
import {CatalogReducer} from 'redux/modules/catalog';
const reduxAsyncConnect = require('redux-connect').reducer;

export default combineReducers({
  reduxAsyncConnect,
  routing,
  categoryList: CategoryListReducer,
  category: CategoryReducer,
  catalog: CatalogReducer,
});
