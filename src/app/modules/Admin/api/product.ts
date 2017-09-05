import request from '../../../services/request';


/**
 * Получение товара по Id
 */
export const getProduct = (params: {id: string}) => request.get('products/' + params.id);

/**
 * Создание товара
 */
export const createProduct = (data: any) => request.post('products', data);


/**
 * Получение списка товаров
 */
export const getProductList = (params?: Object) => request.get('products', {params});