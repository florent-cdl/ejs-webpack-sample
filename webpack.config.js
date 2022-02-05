const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { htmlWebpackPluginTemplateCustomizer }  = require('template-ejs-loader')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname) + '/src/index.js',
  module: {
    rules: [
      // { test: /\.ejs$/i, use: [ { loader: 'ejs-easy-loader' } ] }
      { test: /\.ejs$/i, use: [ 'html-loader', 'template-ejs-loader' ] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: './page-a.html',
      template: htmlWebpackPluginTemplateCustomizer({
        htmlLoaderOption:{
          // set individual html-loader option here
        },
        templateEjsLoaderOption:{
          root:'', // set individual template-ejs-loader option here
          data: {
            title: 'Page A Title',
            meta: {'keywords': 'word1, word2', 'description': 'page description'},
            name: "a",
          }
        },
        templatePath: './src/template.ejs',
      }),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: './page-b.html',
      template: htmlWebpackPluginTemplateCustomizer({
        htmlLoaderOption:{
          // set individual html-loader option here
        },
        templateEjsLoaderOption:{
          root:'', // set individual template-ejs-loader option here
          data: {
            name: "b",
            obj: {"food": "fruit"},
            arr: ["apple", "orange", "banana"],
            title: 'Page B Title',
          }
        },
        templatePath: './src/template.ejs',
      }),
    }),
  ]
};
