const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
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