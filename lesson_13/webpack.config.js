const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './sources/main.js',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, '..')
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'sources/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main.[hash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '*.html',
        '*.js',
        '*.css'
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}
