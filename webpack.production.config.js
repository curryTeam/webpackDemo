var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map', // 配置生成的source maps，选择合适的选项
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js" //打包后输出的文件名
    },
    // 在配置文件中添加loader
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_moudles/,
                loader: 'babel-loader', //在webpack的moudle部分的loaders里进行配置即可
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules' // 模块化
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")
    ],
    devServer: {
        contentBase: '/build',
        host: '127.0.0.1',
        port: 8000, //端口
        historyApiFallback: false,//不跳转
        inline: true, //实时刷新
        hot: true
    }
}
