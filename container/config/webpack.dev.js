const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const package = require('../package.json');

const PORT = 8080;

const config = {
  mode: 'development',
  output: {
    // add a path to look up for the js file
    publicPath: `http://localhost:${PORT}/`
  },
  devServer: {
    port: PORT,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@http://localhost:8081/remoteEntry.js`,
        auth: `auth@http://localhost:8082/remoteEntry.js`,
      },
      shared: Object.keys(package.dependencies)
    })
  ]
};

module.exports = merge(common, config);