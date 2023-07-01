const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Webpack plugin to generate html file and inject our bundles
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Just Another Text Editor',
      }),

      // Inject Custom Service Worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'sw.js',
      }),

      // Webpack plugin to generate a manifest.json file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'A simple text editor',
        background_color: '#ffffff',
        theme_color: '#2196f3',
        start_url: '/',
        icons: [
          {
            src: path.resolve('src/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
          },   
    ],
      }),
    ],


    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test:/\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
              plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-proposal-object-rest-spread'],
            },
          }
        }, 
      ],
    },
  };
};
