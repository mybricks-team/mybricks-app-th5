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
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    new BuildPlugin({
      rootPath,
      outputPath
    }),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../templates/index.html'),
      chunks: ['index'],
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'preview.html',
    //   template: path.resolve(__dirname, '../templates/preview.html'),
    //   chunks: ['preview'],
    // }),
    new HtmlWebpackPlugin({
      filename: 'setting.html',
      template: path.resolve(__dirname, '../templates/setting.html'),
      chunks: ['setting'],
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'preview.vue2.html',
    //   template: path.resolve(__dirname, '../templates/preview.ejs'),
    //   inlineSource: '.(js)$',
    //   inject: 'body',
    //   removeComments: false,
    //   chunks: ['preview'],
    //   target: 'vue2'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'preview.vue3.html',
    //   template: path.resolve(__dirname, '../templates/preview.ejs'),
    //   inlineSource: '.(js)$',
    //   inject: 'body',
    //   removeComments: false,
    //   chunks: ['preview'],
    //   target: 'vue3'
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'preview.react.html',
    //   template: path.resolve(__dirname, '../templates/preview.ejs'),
    //   inlineSource: '.(js)$',
    //   inject: 'body',
    //   removeComments: false,
    //   chunks: ['preview'],
    //   target: 'react'
    // }),
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
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '../templates/public'), to: "public" },
      ],
    })
  ]
})