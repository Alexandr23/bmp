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
export const createCatalog = (data: any) => request.post('catalogs', data);


/**
 * Получение списка каталогов
 */
export const getCatalogList = (filter?: Object) => request.get('catalogs', {params: prepareParams(filter)});




/**
 * Хелпер для преобразования объекта с параметрами фильтра списка {is_active: true} для api {'filter[is_active]': true}
 * @param filter
 * @returns {{}}
 */
function prepareParams (filter: Object) {
  let params = {};
  Object.keys(filter).forEach(key => params['filter[' + key + ']'] = filter[key]);
  return params;
}