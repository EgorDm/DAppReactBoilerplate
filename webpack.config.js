const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRootPlugin = require('html-webpack-react-root-plugin');
const Dotenv = require('dotenv-webpack');

function devTool() {
    return process.env.NODE_ENV !== 'production' ? 'source-map' : false;
}

const extractSass = new ExtractTextPlugin({
    filename: "css/app.css",
   /* disable: process.env.NODE_ENV !== 'production'*/
});


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['babel-polyfill', 'react-hot-loader/patch', './js/index.js'],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        modules: ['scripts', 'node_modules'],
        extensions: [".js", ".jsx", ".es6"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        hot: true
    },
    devtool: devTool(),
    plugins: [
        new Dotenv({path: './.env', safe: true}),
        new HtmlWebpackPlugin(),
        new ReactRootPlugin(),
        extractSass,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        fs: 'empty',
        child_process: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.json$/,
                use: 'json-loader'},
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['env', {modules: false, targets: {browsers: ['last 2 versions']}}],
                        'stage-0',
                        'react'
                    ],
                    cacheDirectory: true,
                    plugins: [
                        'transform-strict-mode',
                        'transform-object-rest-spread',
                        'transform-decorators-legacy',
                        'transform-class-properties',
                        'react-hot-loader/babel'
                    ]
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ],
    }
};

//https://github.com/uzyn/web3-loader