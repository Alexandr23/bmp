import request from '../services/request';


/**
 * api-метод получения Списка Категорий
 */
export const getCategoryList = (params: Object) => request.get('photos', {params});
export const getCategory = (params: {id: number}) => request.get('photos/' + params.id);