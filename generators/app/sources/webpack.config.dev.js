/* eslint-disable */
var config = require('./webpack.config.base');
var webpack = require('webpack');

config.mode = 'development';
config.output.filename = 'scripts/[name].js';

config.module.rules = config.module.rules.concat([
  {
    enforce: 'pre',
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.css/,
    use: [
      'style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][local]-[hash:base64:5]'
        }
      },
      'less-loader'
    ]
  },
  {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[path][local]-[hash:base64:5]'
        }
      },
      'sass-loader'
    ]
  }
])
config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM'
}
config.entry = {
  // login: ['webpack-hot-middleware/client', './login'],
  index: ['webpack-hot-middleware/client', './app']
},
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
])

module.exports = config;