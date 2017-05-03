import request from '../services/request';


/**
 * api-метод получения каталога
 */
export const getCatalog = () => request.get('photos');