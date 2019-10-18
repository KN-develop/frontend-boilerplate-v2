import {src, dest} from 'gulp';
import {getDir}    from '../helpers/gets';
import beautify    from 'gulp-html-beautify';

const twig = require('gulp-twig');


/**
 * Сборка страниц
 *
 * beautify:
 *    indent_size             — количество симовлов в отступе (бекендеры любят 4 пробела)
 *    indent_char             — символ отступа (табы/пробелы и т.д., у нас пробел)
 *    indent_level            — начальный уровень отступа (html -> body -> и т.д.)
 *    preserve_newlines       — сохраняем разрывы строк
 *    max_preserve_newlines   — максимальное количество разрывов
 *    end_with_newline        — пустая линия в конце файла
 *
 *
 * @param cb   — callback
 */
export function buildPages(cb) {
  src('src/pages/*.twig')
    .pipe(
      twig({
        onError: (e) => {
          console.log('****  Error:  ****');
          console.log(e);
          console.log('****  endError:  ****');
        }
      })
    )
    .pipe(beautify({
      indent_size:           4,
      indent_char:           ' ',
      indent_level:          0,
      preserve_newlines:     true,
      max_preserve_newlines: 2,
      end_with_newline:      true
    }))
    .pipe(dest(`${getDir()}/`));

  cb ? cb() : 0;
}