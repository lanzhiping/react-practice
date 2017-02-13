const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const webpackAlias = require('./webpack.alias');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';

const cleanWebpackPlugin = new CleanWebpackPlugin(
    ['build'], {
        root: __dirname,
        verbose: true,
        dry: false,
    }
);

const uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: !isProduction,
        dead_code: !isProduction,
        unused: !isProduction,
    },
    comments: !isProduction,
    beautify: {},
});

const webpackDefinePlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: process.env.NODE_ENV,
    },
});

const reactRule = {
    test: /\.js$/,
    include: /(client|components|backend|server)/,
    use: [{
        loader: 'babel-loader',
        options: {
            presets: [
                ['es2015', { modules: false }],
                // webpack understands the native import syntax, and uses it for tree shaking
                'stage-2',
                // Specifies what level of language features to activate.
                // Stage 2 is 'draft', 4 is finished, 0 is strawman.
                // See https://tc39.github.io/process-document/
                'react', // Transpile React components to JavaScript
            ],
        },
    }],
};

const clientConfig = {
    entry: {
        client: './client/index.js',
        backend: './backend/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        path: './build',
        publicPath: './build',
    },
    module: {
        rules: [reactRule],
    },
    devtool: isProduction ? 'hidden-source-map' : 'eval-source-map',
    target: 'web',
    resolve: { alias: webpackAlias },
    plugins: [],
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
        rules: [reactRule],
    },
};

const sassConfig = {
    entry: './client/main.scss',
    output: {
        filename: './build/main.css',
    },
    resolve: {
        extensions: ['.scss'],
    },
    module: {
        rules: [{
            test: /\.scss$/,
            include: /(client|components)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
            }),
        }],
    },
    plugins: [
        new ExtractTextPlugin('./build/main.css'),
    ],
};

module.exports = [sassConfig, serverConfig, clientConfig];
