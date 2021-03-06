const path = require('path')

module.exports = {
    src: path.join(__dirname, '../src'),
    build: path.join(__dirname, '../dist/'),
    pages: {
        template: path.join(__dirname, '../src/template/'),
        pages: path.join(__dirname, '../src/template/pages/'),
        welcome: path.join(__dirname, '../src/template/pages/welcome/'),
        blog: path.join(__dirname, '../src/template/pages/blog/'),
        about: path.join(__dirname, '../src/template/pages/about/'),
        works: path.join(__dirname, '../src/template/pages/works/')
    },
    common: path.join(__dirname, '../src/template/common/')
}
