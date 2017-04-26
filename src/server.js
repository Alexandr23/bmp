/* eslint "import/no-extraneous-dependencies": "off" */
/* eslint "no-console": "off" */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const fs = require('fs');
const path = require('path');
const config = require('../webpack.config');

// const proxy = fs.statSync(path.join(__dirname, './local/server.proxy.local.js')).isFile()? require('./local/server.proxy.local') : {};

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  inline: true,
  // // It suppress error shown in console, so it has to be set to false.
  // quiet: true,
  // // It suppress everything except error, so it has to be set to false as well
  // // to see success build.
  noInfo: false,
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    children: false,
  },
  //proxy: proxy,
}).listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
