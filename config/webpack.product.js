const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
    module: {
        rules: [
            {
                // css分离
                test: /\.scss$/,
                use: [
                   {
                    loader: MiniCssExtractPlugin.loader
                   },
                   'css-loader',
                   'sass-loader'
                ]
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
        new CleanWebpackPlugin()
    ]
})