const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WatchExternalFilesPlugin = require('webpack-watch-external-files-plugin')

const assetsDir = path.resolve(__dirname, '../theme/assets');
const layoursDir = path.resolve(__dirname, '../theme/layouts');

module.exports = {
  entry: ['./script/index.ts', './style/index.scss'],
  output: {
    path: path.resolve(assetsDir, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new WatchExternalFilesPlugin({
      files: [
        path.join(layoursDir, '/**/*'),
      ]
    })
  ],
  watchOptions: {
    ignored: '/node_modules/',
  },
}
