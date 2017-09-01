import axios from 'axios';


/**
 * api-метод получения Списка Категорий
 */
export const getCategoryList = (params: Object) => axios.get('https://jsonplaceholder.typicode.com/photos', {params});
export const getCategory = (params: {id: number}) => axios.get('https://jsonplaceholder.typicode.com/photos/' + params.id);