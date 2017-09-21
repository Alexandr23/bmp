import request from '../../../services/request';
import {paramsToApi} from '../../../helpers/apiHelper';


/**
 * Получение товара по Id
 */
export const getProduct = (params: {id: string}) => request.get('products/' + params.id);

/**
 * Создание товара
 */
export const createProduct = (data: any) => request.post('products', data);


/**
 * Редактирование товара
 */
export const updateProduct = (id: string, data: any) => request.put('products/' + id, data);


/**
 * Удаление товара
 */
export const deleteProduct = (id: string) => request.delete('products/' + id);


/**
 * Получение списка товаров
 */
export const getProductList = (params?: Object) => request.get('products', {params: paramsToApi(params)});