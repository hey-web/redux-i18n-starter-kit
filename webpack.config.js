var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    devtool: 'sourcemap',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './app/index' // Your appʼs entry point
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'json']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot','babel'], include: path.join(__dirname, 'app') },
            { test: /\.jsx{0,1}$/, loaders: ['babel']},
            { test: /\.json$/, loader: 'json'}
        ]
    },
    plugins: [commonsPlugin,new webpack.HotModuleReplacementPlugin( {hot: true} )]
};
