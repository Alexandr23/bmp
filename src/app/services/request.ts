import * as axios from 'axios';

const request = (axios as any).create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default request;