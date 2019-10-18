/**
 * Тип сборки (продакшен или разработка)
 *
 * @returns {boolean}
 */
export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};

/**
 * Директория для билда в зависимости от типа сборки
 * @returns {string}
 */
export const getDir = () => {
  return 'dev';
};

