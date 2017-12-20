module.exports = {
    parser: 'sugarss',
    plugins: (loader) => [
        require('postcss-import')({ root: loader.resourcePath }),
        require('postcss-cssnext')(),
        require('autoprefixer')(),
        require('cssnano')()
    ]
}