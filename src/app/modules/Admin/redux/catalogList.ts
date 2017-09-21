import * as apiCatalog from '../api/catalog';
import {createListRedux} from './list';


export default createListRedux({
  name: 'CATALOG',
  getList: apiCatalog.getCatalogList,
});