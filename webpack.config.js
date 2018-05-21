var path = require('path')
module.exports = {
    mode: 'development',
    entry:['./src/script/main.js','./src/script/a.js'],
    output:{
        path:path.resolve(__dirname,'dist/js'),
        filename:'bundle.js'
    }
}