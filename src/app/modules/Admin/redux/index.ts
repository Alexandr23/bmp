import {combineReducers} from 'redux';
import {CatalogListReducer} from './catalogList';
import {CategoryReducer} from './category';
import {CategoryListReducer} from './categoryList';


export default combineReducers({
  catalogList: CatalogListReducer,
  category: CategoryReducer,
  categoryList: CategoryListReducer,
});
