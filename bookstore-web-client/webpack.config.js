module.exports = env => {
    process.env.NODE_ENV = env.NODE_ENV;

    return {
        // 1
        entry: './src/index.js',
        // 4
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        // 2
        output: {
            path: __dirname + '/public',
            publicPath: '/',
            filename: 'bundle.js'
        },
        // 3
        devServer: {
            contentBase: './public'
        }
    }
};
