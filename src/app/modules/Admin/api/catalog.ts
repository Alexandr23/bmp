import request from '../../../services/request';
import axios from 'axios';


/**
 * api-метод получения Каталога
 */
export const getCatalog = (params: {id: string}) => axios.get('http://api.bmp.magonline.ru/api/catalogs/' + params.id);
export const getCatalogList = (params?: Object) => axios.get('http://api.bmp.magonline.ru/api/catalogs', {params});