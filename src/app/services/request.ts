import * as axios from 'axios';
import * as e6p from 'es6-promise';
const mainConfig = require('../../../config/main.js');
(e6p as any).polyfill();


const request = (axios as any).create({
  baseURL: mainConfig.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default request;