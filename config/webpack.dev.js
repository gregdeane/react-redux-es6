import webpack from 'webpack';
import * as helpers from './helpers';
import LOADERS from './loaders';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', // note that it reloads the page if hot module reloading fails.
    helpers.root('src')
  ],
  target: 'web',
  output: {
    path: helpers.root('dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: helpers.root('src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: LOADERS
  }
};
