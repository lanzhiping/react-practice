module.exports = [{
    entry: ['server/index.js', 'client/index.js'],
    output: {
        // Make sure to use [name] or [id] in output.filename
        // when using multiple entry points
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        path: './built'
    }
}];
