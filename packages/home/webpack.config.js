const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name]'.js,
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:3001/'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 3001,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react')]
                }
            },
            {
                test: '/\.css$/',
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'app'
        })
    ]
}
