const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const package = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const config = {
  mode: 'production',
  output: {
    // to avoid caching issues, we gave each file a unique name
    filename: '[name].[contenthash].js',
    // add a path to look for the upper file
    publicPath: '/container/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`
      },
      shared: Object.keys(package.dependencies)
    })
  ]
};

module.exports = merge(common, config);