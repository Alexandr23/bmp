/** General Configurations Like PORT, HOST names and etc... */

var config = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8889,
  apiBaseUrl: 'http://api.bmp.magonline.ru/api/',
};

module.exports = config;
