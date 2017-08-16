// var Express = require('express');
// var webpack = require('webpack');
//
// const e6p = require('es6-promise');
// e6p.polyfill();
//
// var config = require('../main');
// var webpackConfig = require('../webpack/dev');
// var compiler = webpack(webpackConfig);
//
// var host = config.host || 'localhost';
// var port = (Number(config.port) + 1) || 3001;
// var serverOptions = {
//   contentBase: 'http://' + host + ':' + port,
//   quiet: true,
//   noInfo: true,
//   hot: true,
//   inline: true,
//   lazy: false,
//   publicPath: webpackConfig.output.publicPath,
//   headers: {'Access-Control-Allow-Origin': '*'},
//   stats: {colors: true}
// };
//
// var app = new Express();
//
// app.use(require('webpack-dev-middleware')(compiler, serverOptions));
// app.use(require('webpack-hot-middleware')(compiler));
//
// app.listen(port, function onAppListening(err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.info('==> 🚧  Webpack development server listening on port %s', port);
//   }
// });