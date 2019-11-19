const path = require('path');
const Dotenv = require('dotenv-webpack');

const BUILD_DIR = path.join(__dirname, 'build');

const dotEnvDev = new Dotenv({ path: './.env.development' });

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [dotEnvDev],
  devServer: {
    contentBase: BUILD_DIR,
    historyApiFallback: true,
  },
};
