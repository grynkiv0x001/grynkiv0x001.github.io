import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Error checking and linting
import ESlintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

// Optimization
import CompressionPlugin from 'compression-webpack-plugin';

import { Configuration as WebpackConfiguration, ProvidePlugin } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

// List of important html pages
const htmlPageNames = ['404'];

// Dynamic handle of multiple html pages
const multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./public/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    chunks: [`${name}.bundle`], // respective JS files
  });
});

const config: Configuration = {
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/build'),
    chunkFilename: '[id].bundle.js',
    publicPath: '/',
    filename: 'index.bundle.js',
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    hot: true, // Live-reload
    open: true, // Open server in a browser automatically
    historyApiFallback: true, // Enable react-router
    client: {
      overlay: {
        errors: true, // Display error on page
        warnings: false,
      },
      logging: 'warn', // Disable console logs from webpack
      reconnect: true, // Reconnect after error fixed etc.
    },
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'], // MiniCss for optimization
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),

    // CSS minimization
    new MiniCssExtractPlugin(),

    // For webpack error checking (typescript)
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),

    // Linter for webpack
    new ESlintWebpackPlugin({
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    }),

    // For better JSX support
    new ProvidePlugin({
      React: 'react',
    }),

    // For optimization
    // new CompressionPlugin({
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ].concat(multipleHtmlPlugins),
};

export default config;
