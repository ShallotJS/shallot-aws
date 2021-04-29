import type { Configuration } from 'webpack';

import path from 'path';
import nodeExternals from 'webpack-node-externals';

const config: Configuration = {
  mode: 'production',
  target: 'node',
  entry: { index: './src/index.ts' },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  // Type definitions are broke on webpack-node-externals
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  externals: [nodeExternals() as any],
};

export default config;
