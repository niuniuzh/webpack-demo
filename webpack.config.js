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
        filename: 'js/[name]-[chunkhash].js',
        publicPath:'http://www.test.cn'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            title:'webpack is awesome',
            test:'dskgjskdljfslkdflk,hahaha',
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        })
    ]
};