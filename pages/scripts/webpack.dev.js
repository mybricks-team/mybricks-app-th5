const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const rootPath = path.resolve(__dirname, './../')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const fs = require('fs')
const pkg = require('../../package.json')
// const webpack = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {},
  },
  devServer: {
    static: {
      directory: path.resolve(rootPath, './assets'),
    },
    port: 9001,
    host: 'localhost',
    hot: true,
    client: {
      logging: 'warn',
    },
    // open: `http://localhost:8001`,
    proxy: [
      {
        context: ['/api/th5/publish', '/api/th5/upload'],
        // target: 'https://my.mybricks.world',
        target: 'http://localhost:9002',
        secure: false,
        changeOrigin: true,
      },
      {
        context: ['/'],
        // target: 'http://testweb.manateeai.com/',
        // target: 'https://my.mybricks.world',
        target: 'http://localhost:3100',
        secure: false,
        changeOrigin: true,
      },
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   ENV: JSON.stringify('DEV'),
    // }),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      templateContent: ({ htmlWebpackPlugin }) => {
        let content = fs.readFileSync(path.resolve(__dirname, '../templates/index.html'), 'utf-8')
        content = content.replace('<!-- _APP_CONFIG_ -->', `<script>const _APP_CONFIG_ = {namespace: '${pkg.name}'}</script>`)
        return content
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'preview.html',
      template: path.resolve(__dirname, '../templates/preview.html'),
      chunks: ['preview'],
    }),
    new HtmlWebpackPlugin({
      filename: 'setting.html',
      template: path.resolve(__dirname, '../templates/setting.html'),
      chunks: ['setting'],
    }),
  ]
})
