const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  // tell webpack that we're building a bundle for node
  target: 'node',
  // root of the server app
  entry: './src/index.js',
  // where to put the bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()],
};
module.exports = merge(baseConfig, config);
