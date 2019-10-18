import browserSync from 'browser-sync';
import {getDir} from "../helpers";

import {
  callbackErrorRedirecting
} from './redirecting';

const server = browserSync.create();

/**
 * Запуск сервера на основе browserSync
 *
 * @param cb  — callback
 */
export function runDevServer(cb) {
  /**
   * watch              — отслеживание файлов (кроме спец. папок, например node_modules)
   * open               — открытие страницы в бразуере после страта сервера
   * reloadDebounce     — дебаунс на перезагрузку сервера
   * notify             — всплывашки в браузере
   * port               — порт (9000)
   * server.baseDir     — директория с файлами сервера
   */
  const params = {
    // отслеживание каталогов
    watch:          true,
    open:           false,
    reloadDebounce: 150,
    notify:         false,
    port:           9000,
    server:         {baseDir: `./${getDir()}`}
  };

  server.init(params, callbackErrorRedirecting);

  cb();
}


