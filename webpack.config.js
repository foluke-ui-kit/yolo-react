/**
 * Created by shawnsandy on 3/19/15.
 */

var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
    filename: 'libs.js',
    minChunks: 2
});

module.exports = {
    entry: {
        main: './public/components.jsx',
        vendors: ['react','jquery']

    },
    output: {
        path: './app/',
        filename: '[name].js',
        publicPath: './src/libs/'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            { test: /\.css$/, loader: 'style-loader!css-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [commonsPlugin]
}
