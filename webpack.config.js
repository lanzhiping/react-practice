let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [{
    entry: {
        server: './server/index.js',
        client: './client/index.js'
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        // when using multiple entry points
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        path: './build'
    },
    plugins: [
        new CleanWebpackPlugin(['build'], {
            root: __dirname, // An absolute path for the root.
            verbose: true, // Write logs to console.
            dry: false // Do not delete anything, good for testing.
        })
    ]
}];
