import {combineReducers} from 'redux';
import {CatalogReducer} from './catalog';
import {CatalogListReducer} from './catalogList';
import {CategoryReducer} from './category';
import {CategoryListReducer} from './categoryList';
import {ProductReducer} from './product';
import {ProductListReducer} from './prodictList';


export default combineReducers({
  catalog: CatalogReducer,
  catalogList: CatalogListReducer,
  category: CategoryReducer,
  categoryList: CategoryListReducer,
  product: ProductReducer,
  productList: ProductListReducer,
});
