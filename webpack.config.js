var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index-[hash].html',
            inject: 'head'
        })
    ]
};