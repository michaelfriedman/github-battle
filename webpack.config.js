const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: __dirname + '/app', loader: 'babel-loader'},
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}
