const path = require('path')

module.exports = {
	src   : path.join(__dirname, '../src') ,
	build : path.join(__dirname, '../dist/'),
    pages : {
        template : path.join(__dirname, '../src/template/'),
        pages    : path.join(__dirname, '../src/template/pages/')
        // index    : path.join(__dirname, '../src/template/pages/index/') ,
        // blog     : path.join(__dirname, '../src/template/pages/blog/')
    }
}
