import * as axios from 'axios';
import * as e6p from 'es6-promise';
(e6p as any).polyfill();


const request = (axios as any).create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default request;