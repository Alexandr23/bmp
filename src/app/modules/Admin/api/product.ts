import request from '../../../services/request';


const DEFAULT_CREATE = {
  data: {
    attributes: {
      name: 'test',
      description: 'test description',
    }
  }
};


/**
 * Получение товара по Id
 */
export const getProduct = (params: {id: string}) => request.get('products/' + params.id);


/**
 * Получение списка товаров
 */
export const getProductList = (params?: Object) => request.get('products', {params});