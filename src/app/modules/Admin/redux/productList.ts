import * as apiProduct from '../api/product';
import {createListRedux} from './list';


export default createListRedux({
  name: 'PRODUCT',
  getList: apiProduct.getProductList,
});