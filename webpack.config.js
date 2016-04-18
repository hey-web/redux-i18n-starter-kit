var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    devtool: 'sourcemap',
    entry: [
        //entry1: './001.basic/src/index',
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './001.basic/src/index' // Your appʼs entry point
    ],
    output: {
        path: path.join(__dirname , '001.basic/build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot','babel'], include: path.join(__dirname +　'/001.basic/', 'src') },
            { test: /\.jsx{0,1}$/, loaders: ['babel']}
        ]
    },
    plugins: [commonsPlugin,new webpack.HotModuleReplacementPlugin( {hot: true} )]
};