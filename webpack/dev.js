const { merge } = require('webpack-merge')
const commonConfig = require('./common')

const developmentConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  stats: {
    errorDetails: true
  },
  devServer: {
    compress: true,
    port: 8082
  }
}

module.exports = merge(commonConfig, developmentConfig)
