const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const package = require('../package.json');

const config = {
  mode: 'production',
  output: {
    // to avoid caching issues, we gave each file a unique name
    filename: '[name].[contenthash].js',
    // add a path to look for the upper file
    publicPath: '/auth/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap'
      },
      shared: Object.keys(package.dependencies)
    })
  ]
};

module.exports = merge(common, config);