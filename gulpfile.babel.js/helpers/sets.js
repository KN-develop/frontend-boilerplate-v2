const del = require('del');

/**
 * Переключение сборщика в режим разработки
 * @param cb
 */
export function setDevelopment(cb) {
  process.env.NODE_ENV = 'development';
  cb();
}

/**
 * Переключение сборщика в режим продакшена
 * @param cb
 */
export function setProduction(cb) {
  process.env.NODE_ENV = 'production';
  cb();
}

/**
 * Очищает билд
 * @returns {Promise<string[]>}
 */
export function clearBuild() {
  return del(['build/**/*']);
}