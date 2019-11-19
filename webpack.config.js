const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const BUILD_DIR = path.join(__dirname, 'build');

module.exports = {
  entry: path.join(SRC_DIR, 'index.js'),
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
};
