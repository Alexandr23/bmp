import {combineReducers} from 'redux';
import {CatalogReducer} from './catalog';


export default combineReducers({
  catalog: CatalogReducer,
});
