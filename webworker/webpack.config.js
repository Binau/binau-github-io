const path = require('path');

module.exports = {
  mode : "development",
  entry: './webworker/dist/worker1.js',
  output: {
    path: path.resolve(__dirname, '../src/assets'),
    filename: 'worker1.js'
  }
};
