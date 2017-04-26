/* eslint "import/no-extraneous-dependencies": "off" */
/* eslint "no-console": "off" */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const fs = require('fs');
const path = require('path');
const config = require('../config/webpack/index.js');


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  inline: true,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    children: false,
  },
}).listen(3000, '0.0.0.0', (err: any) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
