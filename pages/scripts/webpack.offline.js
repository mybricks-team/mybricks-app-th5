const { merge } = require('webpack-merge')
const path = require('path')
const common = require('./webpack.common')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const rootPath = path.resolve(__dirname, './../')
const outputPath = path.resolve(rootPath, '../assets')
const BuildPlugin = require('./buildplugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const HtmlWebpackInlineSourcePlugin = require('@effortlessmotion/html-webpack-inline-source-plugin')
// const fs = require('fs')
// const pkg = require('../../package.json')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true
  },
  output: {
    path: outputPath,
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
    }),
    new CleanWebpackPlugin({
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['**/*.LICENSE.txt', 'report.html'],
      cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico*', '!css/**'],
    }),
    /** Copy 静态资源逻辑都在这，用CopyWebpackPlugin的话会让静态资源都走一遍编译，时间太长了，还编译不了rtComs */
    new BuildPlugin({
      outputPath
    }),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../templates/index.html'),
      chunks: ['index'],
      // templateContent: ({ htmlWebpackPlugin }) => {
      //   let content = fs.readFileSync(path.resolve(__dirname, '../templates/index.html'), 'utf-8')
      //   content = content.replace('<!-- _APP_CONFIG_ -->', `<script>const _APP_CONFIG_ = {namespace: '${pkg.name}'}</script>`)
      //   return content
      // }
    }),
    new HtmlWebpackPlugin({
      filename: 'preview.html',
      template: path.resolve(__dirname, '../templates/preview.ejs'),
      chunks: ['preview'],
    }),
    new HtmlWebpackPlugin({
      filename: 'setting.html',
      template: path.resolve(__dirname, '../templates/setting.html'),
      chunks: ['setting'],
    }),
    new HtmlWebpackPlugin({
      filename: 'groupSetting.html',
      template: path.resolve(__dirname, '../templates/groupSetting.html'),
      chunks: ['groupSetting'],
    }),
    new HtmlWebpackPlugin({
      filename: 'publish.vue2.html',
      template: path.resolve(__dirname, '../templates/publish.ejs'),
      inlineSource: '.(js)$',
      inject: 'body',
      removeComments: false,
      chunks: ['publish'],
      target: 'vue2'
    }),
    new HtmlWebpackPlugin({
      filename: 'publish.vue3.html',
      template: path.resolve(__dirname, '../templates/publish.ejs'),
      inlineSource: '.(js)$',
      inject: 'body',
      removeComments: false,
      chunks: ['publish'],
      target: 'vue3'
    }),
    new HtmlWebpackPlugin({
      filename: 'publish.react.html',
      template: path.resolve(__dirname, '../templates/publish.ejs'),
      inlineSource: '.(js)$',
      inject: 'body',
      removeComments: false,
      chunks: ['publish'],
      target: 'react'
    }),
    new HtmlWebpackInlineSourcePlugin(),
  ]
})