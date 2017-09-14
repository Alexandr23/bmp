import request from '../../../services/request';
import {objectToFilter, objectToPage} from '../../../helpers/apiHelper';


/**
 * api-метод получения Списка Категорий
 */
export const getCategoryList = ({pagination = {}, filter = {}, sort = {}}) => {
  console.log('filter for API: ', filter);

  return request.get('categories', {params: {...objectToPage(pagination), ...objectToFilter(filter)}})
};


/**
 * api-метод получения Категории по id
 */
export const getCategory = (params: {id: number}) => request.get('category/' + params.id);