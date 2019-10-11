/* eslint-disable */
/**
 * Сборник методов для бэкендеров
 *
 * Методы срабатывают в нужных местах и получает нужные на бэке данные.
 * В методы может передаваться колбэк — реакция фронта на успех / неудачу.
 *
 * Например, в метод приходит айди товара,
 * внутри этого файла отправляется аякс-запрос и вызывается колбэк, если всё успешно,
 * на фронте происходит какая-то реакция.
 *
 * В отдельном файле, чтобы бэкендеры не трогали фронт, а разработка велась независимо.
 */

window.API = {
    onSendQuestionForm(params, callback) {
      console.groupCollapsed('API: onSendQuestionForm');
      console.log(params);
      console.groupEnd();

      const request = {
        success: true,
      };

      setTimeout(() => {
        callback ? callback(request) : 0;
      }, 1500);
    },
    onSendSubscribeForm(params, callback) {
      console.groupCollapsed('API: onSendSubscribenForm');
      console.log(params);
      console.groupEnd();

      const request = {
        success: true,
      };

      setTimeout(() => {
        callback ? callback(request) : 0;
      }, 1500);
    },
  },
  account: {

    /**
     * Референс функции
     *
     * @param params   {object}       входные параметры
     * @param callback {function}     функция (реакция фронта)
     */
    referenceFunction(params, callback) {
      console.groupCollapsed('referenceFunction');
      console.log(params);
      console.groupEnd();

      setTimeout(() => {
        callback ? callback() : 0;
      }, 1500);
    }
  }
};
