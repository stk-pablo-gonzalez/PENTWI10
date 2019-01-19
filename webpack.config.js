var path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    //context: path.join(__dirname, 'app'),
    entry: {
        javascript: './app/app.js',
        // html: './app/index.html'
    },
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: 'bundle.js'
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './app/index.html',
            filename: './index.html'
        })
    ]
}