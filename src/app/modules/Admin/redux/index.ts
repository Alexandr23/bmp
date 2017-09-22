import {combineReducers} from 'redux';
import {CatalogReducer} from './catalog';
import CatalogListRedux from './catalogList';
import {CategoryReducer} from './category';
import CategoryListRedux from './categoryList';
import {ProductReducer} from './product';
import ProductListRedux from './productList';

/* features */
import {CategoryListReducer as CategoryListAutoComplete} from '../features/CategoryListAutoComplete/redux';


export default combineReducers({
  catalog: CatalogReducer,
  catalogList: CatalogListRedux.Reducer,
  category: CategoryReducer,
  categoryList: CategoryListRedux.Reducer,
  product: ProductReducer,
  productList: ProductListRedux.Reducer,
  categoryListAutoComplete: CategoryListAutoComplete,
});
