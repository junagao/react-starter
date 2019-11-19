const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = ({ env }) => {
  const envConfig = env === 'dev' ? devConfig : prodConfig;
  return webpackMerge(commonConfig, envConfig);
};
