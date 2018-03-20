const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'wagtailsentiment.bundle.js',
    path: path.resolve(__dirname, 'wagtailsentiment/static')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            }
        }
    ]
  }
};