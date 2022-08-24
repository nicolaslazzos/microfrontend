const { merge } = require('webpack-merge');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const common = require('./webpack.common');
const package = require('../package.json');

const PORT = 8083;

const config = {
  mode: 'development',
  output: {
    // add a path to look up for the js file
    publicPath: `http://localhost:${PORT}/`
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashbooard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      }
    })
  ]
};

module.exports = merge(common, config);