const path = require('path');

module.exports = {

  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build', // instead of publicPath: '/build/' 
    filename: '[name].js'
  }
};