/* eslint-disable */
process.env.NODE_ENV = 'production';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

config.mode = 'production';
config.output.filename = 'scripts/[name].js',
config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM'
}
config.module.rules = config.module.rules.concat([
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader']
  },
  {
    test: /\.css/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader'
    ]
  },
  {
    test: /\.less$/,
    use: [
      MiniCssExtractPlugin.loader,
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
      MiniCssExtractPlugin.loader,
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
config.entry = {
  // login: './login',
  index: './app'
},
config.plugins.push(
  new CleanWebpackPlugin('dist'),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css'
  }),
  new OptimizeCssAssetsPlugin({}),
  new HtmlWebpackPlugin({
    title: 'home',
    filename: '../index.html',
    template: '../tmpl/index.ejs',
    chunks: ['vendor', 'index']
  }),
  // new HtmlWebpackPlugin({
  //   title: 'login',
  //   filename: '../login.html',
  //   template: '../tmpl/index.ejs',
  //   chunks: ['vendor', 'login']
  // })
);
config.optimization = {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      default: false,
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendor',
        priority: 10,
        enforce: true,
      },
    }
  }
},

module.exports = config;