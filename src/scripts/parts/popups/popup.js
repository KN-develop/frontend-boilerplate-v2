export class Popup {
  constructor(popup) {
    this.$popup      = $(popup);
    this.$container  = this.$popup.find('.js-popup-container');
    this.$close      = this.$popup.find('.js-popup-close');
    this.name        = this.$popup.attr('data-popup');
    this.type        = this.$popup.attr('data-type');
    this.$buttons    = $(`[data-popup =  ${this.name}]:not(.js-popup)`);
    this.$html       = $('html');
    this.htmlPadding = 0;

    this.init();
  }

  /**
   * Инициализация обработчиков событий
   */
  init() {
    this.$close.on('click', this.close.bind(this));
    this.$buttons.on('click', this.open.bind(this));

    if (this.$buttons.data('popup') === 'flow-cart') {
      this.$buttons.on('mouseenter', this.open.bind(this));
    }
  }

  close() {
    this.$popup.removeClass('mod-show');

    if (this.type === `video`) {
      const $iframe = this.$popup.find(`iframe`);
      $iframe.attr(`src`, $iframe.attr(`src`));
    }

    if (this.name !== `cookie`) {
      this.$html
        .removeClass('mod-popup-is-open')
        .css({
          'top':  'initial',
          'left': 'initial',
          'height': 'initial'
        });
      $(document).scrollTop(this.htmlPadding);
    }
  }

  open() {
    const width = $(document).width();

    this.htmlPadding = $(document).scrollTop();
    this.$popup.addClass('mod-show');

    if (this.name !== `cookie`) {
      this.$html
        .addClass('mod-popup-is-open')
        .css({
          'top':  -this.htmlPadding,
          'left': (width - $(document).width()) / 2,
          'height': `calc(100% + ${this.htmlPadding}px)`,
        });
    }

    if (this.$popup.data('popup') === 'flow-cart') {
      this.setCoords();

      $(window).on('resize', () => {
        this.setCoords();
      });

      $(document).on('click', this.closeFlowCart.bind(this));
    }
  }

  setCoords($element) {
    let windowWidth = $(window).width();

    if (windowWidth >= 768) {
      this.$container.css({
        'position': 'absolute',
        'top': `${this.$buttons.offset().top + this.$buttons.height()}px`,
        'left': `${this.$buttons.offset().left - this.$container.width() / 2 + 10}px`
      });
    } else {
      this.$container.css({
        'position': 'static'
      });
    }
  }

  closeFlowCart(e) {
    if (!$(e.target).parents('.js-popup-container').length) {
      this.close();
      $(document).off('click', this.closeFlowCart);
    }
  }
}
