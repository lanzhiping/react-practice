const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackAlias = require('./webpack.alias');

module.exports = [{
    entry: {
        server: './server/index.js',
        client: './client/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: './build',
    },
    watch: /\.js$/,
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
                   presets: ['es2015']
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: true,
            dry: false
        }),
    ]
}];
