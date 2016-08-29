const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpackAlias = require('./webpack.alias');
const webpack = require('webpack');

const clientConfig = {
    entry: {
        client: './client/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: './build',
    },
    resolve: {
        alias: webpackAlias,
    },
    module: {
        loaders: [{
            test: /(client|components).+\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015'],
            },
        }],
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
};

const serverConfig = {
    entry: {
        server: './server/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: './build',
    },
    target: 'node',
    externals: [nodeExternals({
        modulesDir: 'node_modules',
    })],
    resolve: {
        alias: webpackAlias,
    },
    module: {
        loaders: [
            {
                test: /(server|components).+\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                },
            },
        ],
    },
};

module.exports = [clientConfig, serverConfig];
