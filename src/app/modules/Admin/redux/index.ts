import {combineReducers} from 'redux';
import {CatalogReducer} from './catalog';
import {CatalogListReducer} from './catalogList';
import {CategoryReducer} from './category';
import {CategoryListReducer} from './categoryList';


export default combineReducers({
  catalog: CatalogReducer,
  catalogList: CatalogListReducer,
  category: CategoryReducer,
  categoryList: CategoryListReducer,
});
