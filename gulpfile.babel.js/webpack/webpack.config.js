const path = require('path');

export const webpackConfig = {
  mode:   process.env.NODE_ENV || 'development',
  entry:  {
    'index': './src/scripts/index.js',
  },
  output: {
    filename: '[name].js'
  }
};
