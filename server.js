'use strict';

var webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config           = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath:         config.output.publicPath,
    hot: true, 
    historyApiFallback: true,
    stats:              { colors: true }
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});