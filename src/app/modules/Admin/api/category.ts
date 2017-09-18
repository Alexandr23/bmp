import request from '../../../services/request';
import {objectToFilter, objectToPage} from '../../../helpers/apiHelper';


const entity = 'categories';


/**
 * Получение категории
 */
export const getCategory = (params: {id: number}) => request.get(`${entity}/${params.id}`);


/**
 * Создание категории
 */
export const createCategory = (data: any) => request.post(`${entity}`, data);


/**
 * Изменение категории
 */
export const updateCategory = (id: string, data: any) => request.put(`${entity}/${id}`, data);


/**
 * Удаление категории
 */
export const deleteCategory = (id: string) => request.delete(`${entity}/${id}`);


/**
 * Получение списка категорий
 */
export const getCategoryList = ({pagination = {}, filter = {}, sort = {}}) => {
  return request.get('categories', {params: {...objectToPage(pagination), ...objectToFilter(filter)}})
};