const path = require('path');

/**
 * Подставляет актуальные скрипты
 */
const HTMLWebpackPlugin = require('html-webpack-plugin');

/**
 * Очистка папки отоговой сборки (output.path)
 */
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    /**
     * Чанки
     */
    main: './index.js',
    analytics: './analytics.js',
  },
  output: {
    /**
     * [name] - вставляет имя чанка в название файла
     * [contenthash] - вставляет хеш в название файла
     */
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      // title: 'Webpack App', - не работает в связке с template
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      'App': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 50000,
  },
};
