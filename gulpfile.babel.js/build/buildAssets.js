import {src, dest, parallel}  from 'gulp';
import cached                 from 'gulp-cached';
import imagemin               from 'gulp-imagemin';
import {getDir} from '../helpers/gets';


/**
 * Сборка фавиконок
 *
 * @param cb   —  callback
 */
export function buildFavicons(cb) {
  src('src/assets/favicon/**/*.*')
    .pipe(cached('favicons'))
    .pipe(dest(`${getDir()}/assets/favicon/`));
  cb ? cb() : 0;
}

/**
 * Сборка шрифтов
 *
 * @param cb   —  callback
 */
export function buildFonts(cb) {
  src('src/assets/fonts/**/*.*')
    .pipe(cached('fonts'))
    .pipe(dest(`${getDir()}/assets/fonts/`));
  cb ? cb() : 0;
}

/**
 * Сборка картинок
 *
 * @param cb
 */
export function buildImages(cb) {
  src('src/assets/img/**/*.*')
    .pipe(cached('img'))
    // .pipe(imagemin())
    .pipe(dest(`${getDir()}/assets/img/`));

  cb ? cb() : 0;
}

/**
 * Сборка прочих файлов
 *
 * @param cb   —  callback
 */
export function buildOther(cb) {
  src('./src/assets/other/**/*.*')
    .pipe(cached('otherAssets'))
    .pipe(dest(`${getDir()}/assets/other/`));
  cb ? cb() : 0;
}

exports.buildAssets = parallel(
  buildImages,
  buildFavicons,
  buildFonts,
  buildOther
);
