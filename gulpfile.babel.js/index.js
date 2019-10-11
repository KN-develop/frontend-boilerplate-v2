import {series, parallel} from 'gulp';
import {watchSrc}         from './watchers';
import {runDevServer}     from './server/server';

import {
  setProduction,
  setDevelopment,
  clearBuild
} from './helpers';

import {
  buildPages,
  buildStyles,
  buildScripts,
  buildAssets
} from './build';

exports.default = parallel(
  runDevServer,
  watchSrc,
  setDevelopment,
  parallel(buildPages, buildScripts, buildStyles, buildAssets)
);

exports.build = series(
  setProduction,
  clearBuild,
  parallel(buildPages, buildScripts, buildStyles, buildAssets)
);

exports['build:styles'] = series(
  setProduction,
  parallel(buildStyles)
);

exports['build:pages'] = series(
  setProduction,
  parallel(buildPages)
);

exports['build:scripts'] = series(
  setProduction,
  parallel(buildScripts)
);

exports['build:assets'] = series(
  setProduction,
  parallel(buildAssets)
);