import axios from 'axios';
import request from '../../../services/request';
import {objectToFilter, objectToPage} from '../../../helpers/apiHelper';


/**
 * api-метод получения Списка Категорий
 */
export const getCategoryList = (params: {filter?: Object, page?: Object}) => {
  const data = {...objectToFilter(params.filter || {}), ...objectToPage(params.page || {})};
  return request.get('categories', {params: data});
};


/**
 * api-метод получения Категории по id
 */
export const getCategory = (params: {id: number}) => request.get('category/' + params.id);