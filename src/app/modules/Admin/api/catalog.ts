import request from '../../../services/request';


const DEFAULT_CREATE = {
  "data": {
    "attributes": {
      "name": "test 2",
      "description": "test description",
      "is_active": true
    }
  }
};


/**
 * Получение каталога
 */
export const getCatalog = (params: {id: string}) => request.get('catalogs/' + params.id);


/**
 * Создание каталога
 */
export const createCatalog = () => request.post('catalogs', DEFAULT_CREATE);


/**
 * Получение списка каталогов
 */
export const getCatalogList = (params?: Object) => request.get('catalogs', {params});