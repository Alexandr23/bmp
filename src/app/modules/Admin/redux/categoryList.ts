import * as apiCategory from '../api/category';
import {createListRedux} from './list';


export default createListRedux({
  name: 'CATEGORY',
  getList: apiCategory.getCategoryList,
});