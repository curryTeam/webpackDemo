var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: '#source-map', // 配置生成的source maps，选择合适的选项
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
                exclude: /node_modules/,
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
        new webpack.HotModuleReplacementPlugin(), //热加载插件
        new webpack.optimize.UglifyJsPlugin({
            comments: false,        //去掉注释
            compress: {
                warnings: false    //忽略警告,要不然会有一大堆的黄色字体出现……
            }
        })
    ],
    devServer: {
        contentBase: '/build',
        host: '127.0.0.1',
        port: 8000, //端口
        historyApiFallback: true,//不跳转
        inline: true, //实时刷新
        hot: true
    }
}
