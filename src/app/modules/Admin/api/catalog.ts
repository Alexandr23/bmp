import request from '../../../services/request';
import axios from 'axios';


/**
 * api-метод получения Каталога
 */
export const getCatalog = (params?: Object) => request.get('photos', {params});
export const getCatalogList = (params?: Object) => axios.get('http://api.bmp.magonline.ru/api/catalogs', {params});