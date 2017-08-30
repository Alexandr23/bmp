var webpack = require('webpack');
var path = require('path');
const mainConfig = require('../main');
const publicPath = 'http://' + mainConfig.host + ':' + (+mainConfig.port + 1);

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?' + publicPath,
      './src/client/index.tsx'
    ],
  },

  output: {
    path: path.resolve('./dist'),
    filename: '[name].js?v=[hash]',
    publicPath: publicPath + '/',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.DefinePlugin({
      "process.env": {
        BUILD_TARGET: JSON.stringify("client"),
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],

  devServer: {
    host: mainConfig.host,
    port: +mainConfig.port + 1,
    historyApiFallback: true,
    hot: true,
    headers: { "Access-Control-Allow-Origin": "*" },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'ts-loader'],
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          'less-loader'
        ],
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(ttf|eot|woff2?)(\?[a-z0-9]+)?$/,
        use: 'file-loader?name=font/[name]-[hash].[ext]',
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/i,
        use: ['url-loader?limit=5000&name=img/[name].[ext]'],
      },
    ]
  }
};