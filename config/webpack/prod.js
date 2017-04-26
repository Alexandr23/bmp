var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/client.tsx',
  },

  output: {
    path: path.resolve('./dist/'),
    filename: '[name].js?v=[hash]',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules'],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return module.context && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.less/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: [{
            loader: 'style-loader',
          }],
          use: [
            'css-loader',
            'less-loader'
          ],
        }),
      }
    ]
  }
};