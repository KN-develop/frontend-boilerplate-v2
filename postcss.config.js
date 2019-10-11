'use strict';

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const mqpacker = require('css-mqpacker');


const plugins = {
  'development': [
    cssnano()
  ],
  'production': [
    autoprefixer({grid: 'autoplace'}),
    mqpacker(),
    cssnano()
  ]
};

module.exports = {
  plugins: plugins[process.env.NODE_ENV],
  map: process.env.NODE_ENV === 'production' ? false : 'inline'
};
