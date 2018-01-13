const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const proj_path = require('./config/path')

let sourcemap, watcher

if (process.env.NODE_ENV === 'production') {
    sourcemap = 'source-maps'
    watcher = false
} else {
    sourcemap = 'eval'
    watcher = true
}

console.clear()
console.log('Build for production started')

module.exports = {
    // Entry directories
    entry: {
        index: proj_path.pages.pages + '/index.js',
        welcome: proj_path.pages.welcome + '/welcome.js',
        blog: proj_path.pages.blog + '/blog.js',
        about: proj_path.pages.about + '/about.js',
        works: proj_path.pages.works + '/works.js',
        common: proj_path.common + '/common.js'
    },
    // Output dirrectory
    output: {
        path: proj_path.build,
        filename: './js/[name].js'
    },
    // watching file
    watch: watcher,
    // Using source maps
    devtool: sourcemap,
    // Settings for webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        open: true,
        watchContentBase: true,
        port: 9669
    },
    // Removes the extension
    resolve: {
        extensions: ['.js', '.pug', '.scss', '.less', '.jsx', '.vue']
    },
    // Using plugins for webpack
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        // new htmlWebpackPlugin({
        //     filename: 'index.html',
        //     chunks: ['index', 'common'],
        //     template: proj_path.pages.pages + '/index.pug'
        // }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['welcome', 'common'],
            template: proj_path.pages.welcome + '/welcome.pug'
        }),
        // new htmlWebpackPlugin({
        //     filename: 'welcome-auth.html',
        //     chunks: ['welcome', 'common'],
        //     template: proj_path.pages.welcome + '/welcome-auth.pug'
        // }),
        new htmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog', 'common'],
            template: proj_path.pages.blog + '/blog.pug'
        }),
        new htmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['about', 'common'],
            template: proj_path.pages.about + '/about.pug'
        }),
        new htmlWebpackPlugin({
            filename: 'works.html',
            chunks: ['works', 'common'],
            template: proj_path.pages.works + '/works.pug'
        }),
        new ExtractTextPlugin('./css/style.css'),
        // new webpack.ProvidePlugin({
        //     $      : 'jquery',
        //     jQuery : 'jquery'
        // }),
        new UglifyJSPlugin(),
    ],
    // Using modules and loaders
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '../',
                    use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader', options: {importLoaders: 1}},
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'es2015', 'stage-1']
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: true
                }
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: './assets/img/[folder]/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: './assets/fonts/[name].[ext]'
                }
            }
            // {
            //     test: /\.css$/,
            //     loader: 'postcss-loader',
            //     options: {
            //         ident: 'postcss',
            //         plugins: (loader) => [
            //             require('postcss-import')({root: loader.resourcePath}),
            //             require('postcss-cssnext')(),
            //             require('autoprefixer')(),
            //             require('cssnano')()
            //         ]
            //     }
            // }
        ]
    }
}