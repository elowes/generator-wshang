/* eslint-disable */

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/static'),
    publicPath: '/static/'
  },
  module: {
    rules: []
  },
  plugins: []
}