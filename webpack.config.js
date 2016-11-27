const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpackAlias = require('./webpack.alias');
const webpack = require('webpack');

function isProduction() {
    return process.env.NODE_ENV === 'production';
}

const clientConfig = {
    devtool: isProduction() ? 'cheap-module-source-map' : 'source-map',
    entry: {
        client: './client/index.js',
        backend: './backend/index.js',
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
            test: /(client|components|backend).+\.js$/,
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
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: process.env.NODE_ENV,
        //     },
        // }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: !isProduction(),
                dead_code: !isProduction(),
                unused: !isProduction(),
            },
            comments: !isProduction(),
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

const sassConfig = {
    entry: './client/main.scss',
    output: {
        filename: './build/main.css',
    },
    resolve: {
        extensions: ['', '.scss'],
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass'),
        }],
    },
    plugins: [
        new ExtractTextPlugin('./build/main.css'),
    ],
};

module.exports = [clientConfig, serverConfig, sassConfig];
