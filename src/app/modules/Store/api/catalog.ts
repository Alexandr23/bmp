import axios from 'axios';


/**
 * api-метод получения Каталога
 */
export const getCatalog = (params: Object) => axios.get('https://jsonplaceholder.typicode.com/photos', {params});