const webpack = require('@cypress/webpack-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const path = require('path');

module.exports = (on, config) => {
  const options = {
    webpackOptions: require(path.resolve('cypress/webpack.config.js')),
    watchOptions: {},
  };
  on('file:preprocessor', webpack(options));
};