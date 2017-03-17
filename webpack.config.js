const ExtractTextPlugin = require('extract-text-webpack-plugin');

const reactRule = {
    test: /\.jsx$/,
    include: /(client|components)/,
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
    stats: 'minimal'
};

const clientConfig = {
    entry: {
        client: './client/index.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: './build',
        publicPath: './build',
    },
    module: {
        rules: [reactRule],
    },
    devtool: 'eval-source-map',
    target: 'web',
    plugins: [],
    stats: 'minimal'
};

module.exports = [clientConfig, sassConfig];
