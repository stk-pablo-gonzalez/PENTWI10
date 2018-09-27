var path = require('path');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: {
        javascript: './app.js',
        html: './index.html'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
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
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'style-loader!css-loader'
                }
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader?limit=100000'
                }
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    }
}