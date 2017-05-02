import request from '../services/request';


/**
 * api-метод получения списка категорий
 */
export const getCategoryList = () => request.get('photos');