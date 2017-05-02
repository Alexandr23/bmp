import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {CategoryReducer} from './modules/category';

export default combineReducers({
  routing,
  category: CategoryReducer,
});
