var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    context: path.resolve(__dirname),
    mode: 'development',
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://www.test.cn'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'a.html',
            title: 'this is a.html',
            inject: false,
            excludeChunks: ['b', 'c']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            title: 'this is b.html',
            inject: false,
            chunks: ['main', 'b']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'c.html',
            title: 'this is c.html',
            inject: false,
            chunks: ['main', 'c']
        })
    ]
};