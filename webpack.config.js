const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {

        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }
       ]
    },
    devServer:{
        port:900

    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}