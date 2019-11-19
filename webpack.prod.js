const Dotenv = require('dotenv-webpack');

const dotEnvProd = new Dotenv({ path: './.env.production' });

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [dotEnvProd],
};
