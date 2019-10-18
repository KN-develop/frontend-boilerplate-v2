import {src, dest} from 'gulp';
import postcss     from 'gulp-postcss';
import sass        from 'gulp-sass';
import sassGlob    from 'gulp-sass-glob';
import {getDir}    from '../helpers/gets';

/**
 * Сборка и минификация стилей
 *
 * Scss + postcss + autoprefixer + cssnano
 *
 * @param cb
 */
export function buildStyles(cb) {
  src('./src/styles/*.scss')
    .pipe(sassGlob())
    .pipe(sass()
      .on('error', e => console.log(e)))
    .pipe(postcss()
      .on('error', e => console.log(e)))
    .pipe(dest(`${getDir()}/styles/`));

  src(['./src/styles/old/*.css', './src/styles/old/vendor/*.css'])
    .pipe(dest(`${getDir()}/styles`));

  cb ? cb() : 0;
}
