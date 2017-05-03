import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import {CatalogReducer} from 'redux/modules/catalog';

export default combineReducers({
  routing,
  catalog: CatalogReducer,
});
