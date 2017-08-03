import request from '../services/request';


/**
 * api-метод получения каталога
 */
export const getCatalog = (params: Object) => request.get('photos', {params});