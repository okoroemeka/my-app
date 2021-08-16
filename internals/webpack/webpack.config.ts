import webpack from 'webpack';
// @ts-ignore
import DotEnv from 'dotenv-flow-webpack';
import { resolve } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { isEnvProduction, isEnvDevelopment, Env, port } from './utils';

const config: webpack.Configuration = {
  mode: isEnvProduction ? Env.PRODUCTION : Env.DEVELOPMENT,
  entry: resolve(process.cwd(), 'src/index.tsx'),
  output: {
    filename: 'build.js',
    path: resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  ...(isEnvDevelopment && {
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
      port,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  }),
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
  plugins: [
    new DotEnv(),
    new CopyWebpackPlugin([{ from: resolve(process.cwd(), 'src/public/index.html') }]),
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(process.cwd(), 'src/public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.gql', '.graphql'],
  },
};

export default config;
