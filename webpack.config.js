const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.bundle.js'
    },
    // plugins for vendor code
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new BundleAnalyzerPlugin({
            // can also 'disable' the 'static' value
            analyzerMode: 'static', // the report outputs to an HTML file in the dist folder
        })
    ],
    mode: 'development' // by default webpack wants to run in 'production' mode
};