import request from '../../../services/request';


/**
 * api-метод получения Каталога
 */
export const getCatalog = (params: Object) => request.get('photos', {params});