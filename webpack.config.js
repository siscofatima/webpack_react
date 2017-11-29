var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports= {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //enable dev source map
  devtool: 'eval-source-map',
  //enable dev server
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  resolve: {
      //自动扩展文件后缀名，意味着require模块可以省略不写js或jsx后缀名
      extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH,
        // 如果没有.babelrc，在这里设置也行，或者在package.json里面配置"babel":{}
        // query: {
        //  //使用这两种presets处理js或者jsx文件
        // presets: ['es2015', 'react'],
        //   //在开发的时候才启用HMR和Catch Error, 需要安装babel-preset-react-hmre
        //   "env": {
        //     "development": {
        //       "presets": ["react-hmre"]
        //     }
        //   }
        // }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'My first react app'
    })
  ]
}