const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // root of the client app
  entry: './src/client/index.js',
  // where to put the bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
module.exports = merge(baseConfig, config);
