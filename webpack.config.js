var path = require('path')
module.exports = {
    mode: 'development',
    entry:'./src/script/main.js',
    output:{
        path:path.resolve(__dirname,'dist/js'),
        filename:'bundle.js'
    }
}