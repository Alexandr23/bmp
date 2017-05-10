var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var stylelint = require('stylelint');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var config = {
  externals: nodeModules,
  target: 'node',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
  },

  entry: './src/ssr.tsx',

  output: {
    path: path.resolve('./dist'),
    filename: 'server.js',
    publicPath: '/dist/',
    libraryTarget: 'commonjs2'
  },

  module: {
    loaders: [{
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.css$/,
        include: path.resolve('./src/app'),
        use: [
          'isomorphic-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          'isomorphic-style-loader',
          'css-loader',
          'less-loader'
        ],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'isomorphic-style-loader',
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
    ]
  },

  plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: false,
        options: {
          postcss: function () {
            return [
              postcssNext(),
              postcssAssets({
                relative: true
              }),
            ];
          },
        }
      })
  ],

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  }
};

module.exports = config;
