const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackAlias = require('./webpack.alias');
const webpack = require('webpack');

module.exports = [{
    entry: {
        client: './client/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: './build',
    },
    watch: ['./*.js', '!./build', '!./node_modules'],
    resolve: {
        alias: webpackAlias,
    },
    module: {
        loaders: [
            {
                test: /client.+\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015'],
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: true,
            dry: false,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
                dead_code: true,
                unused: true,
            },
            beautify: {},
        }),
    ],
}];
