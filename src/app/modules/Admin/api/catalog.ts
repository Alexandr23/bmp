import request from '../../../services/request';
import {paramsToApi} from '../../../helpers/apiHelper';


/**
 * Получение каталога
 */
export const getCatalog = (params: {id: string}) => request.get('catalogs/' + params.id);


/**
 * Создание каталога
 */
export const createCatalog = (data: any) => request.post('catalogs', data);


/**
 * Изменение каталога
 */
export const updateCatalog = (id: string, data: any) => request.put('catalogs/' + id, data);


/**
 * Удаление каталога
 */
export const deleteCatalog = (id: string) => request.delete('catalogs/' + id);


/**
 * Получение списка каталогов
 */
export const getCatalogList = (params?: any) => request.get('catalogs', {params: paramsToApi(params)});