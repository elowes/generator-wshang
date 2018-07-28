/* eslint-disable */

var config = require('./webpack.config.dev');
var express = require('express');
var openBrowser = require('react-dev-utils/openBrowser');
var webpack = require('webpack');

var port = 8877;

var app = express();
var compiler = webpack(config);

app.set('view engine', 'ejs');

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath, noInfo: true
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie')
  next();
})

app.get('/login(/*)?', (req, res) => {
  res.render('login');
})

app.get('*', (req, res) => {
  res.render('index');
})

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  if (openBrowser(`http://localhost:${port}`)) {
    console.log(`Server Started. Listen :${port}`);
  }
})