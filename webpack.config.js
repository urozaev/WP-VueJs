const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {VueLoaderPlugin} = require('vue-loader')
const webpack = require('webpack')
// const Inputmask = require('inputmask');


module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'//исключаем из обработки
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        sass: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.sass$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                    
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {sourceMap: true, config: {path: 'src/js/postcss.config.js'}}
                    }
                ]
            }
        ]
    },
    devServer: {
        overlay: true
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        // new Inputmask()
    ]

}