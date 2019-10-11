import {Popup} from './popup';

/**
 * Классы
 *    js-popup - попап
 *    js-popup-close - кнопки закрытия
 *    //
 *    mod-popup-is-open — навешивается на html, когда попап открыт
 *    mod-show — навешивается на попап при открытии
 * Атрибуты:
 *    data-popup — навзание попапа, добавляем на сам попап и конпку для открытия
 */
export class Popups {

  constructor() {
    this.popups = {};

    const escScanCode = 27;

    $('.js-popup').each((i, popup) => {
      this.popups[popup.dataset.popup] = new Popup(popup);
    });

    $(window).on('keydown', (e) => {
      if (e.keyCode === escScanCode) {
        $.each(this.popups, (i, popup) => {
          popup.close();
        });
      }
    });
  }

  open(name) {
    if (this.popups.hasOwnProperty(name)) {
      this.popups[name].open();
    }
  }

  close(name) {
    if (this.popups.hasOwnProperty(name)) {
      this.popups[name].close();
    }
  }
}