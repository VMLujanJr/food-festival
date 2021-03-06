const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    entry: {
        app: './assets/js/script.js',
        events: './assets/js/events.js',
        schedule: './assets/js/schedule.js',
        tickets: './assets/js/tickets.js'
    },
    output: {
        path: path.join(__dirname + "/dist"),
        filename: "[name].bundle.js",
        publicPath: '',
        // filename: '[name].bundle.js',
        // path: __dirname + '/dist'
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name(file) {
                                return '[path][name].[ext]'
                            },
                            publicPath: function (url) {
                                return url.replace('../', '/assets/')
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
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
        }),
        new WebpackPwaManifest({
            name: 'Food Event',
            short_name: 'Foodies',
            description: 'An application that allows you to view upcoming food events.',
            start_url: '../index.html',
            background_color: '#01579b',
            theme_color: '#ffffff',
            fingerprints: false,
            inject: false,
            icons: [{
                src: path.resolve('./assets/img/icons/icon-512x512.png'),
                sizes: [96, 128, 192, 256, 384, 512],
                destination: path.join('assets', 'icons')
            }]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        compress: true,
        port: 8080,
    },
    mode: 'development' // by default webpack wants to run in 'production' mode
};