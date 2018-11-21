const path = require('path');

module.exports = {
  mode: "development",
  entry: './webworker/src/worker1.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, '../src/assets'),
    filename: 'worker1.js'
  }
};
