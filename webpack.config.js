const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const SRC_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'build');

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(SRC_DIR, 'index.html'),
  filename: 'index.html',
  inject: false,
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [htmlPlugin, cleanWebpackPlugin],
};
