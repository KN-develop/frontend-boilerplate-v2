import {textInput} from './components/text';
import {emailInput} from './components/email';

export const subscribeForm = () => {
  if (document.querySelector(`.js-subscribe-form`)) {
    const subscribeForm = new Vue({
      el: `.js-subscribe-form`,
      delimiters: ['${', '}'],
      components: {
        textInput,
        emailInput,
      },
      data: {
        email: {
          name: `email`,
          id: `question-email-1`,
          placeholder: `Ваш e-mail *`,
          footerInfo: ``,
          value: ``,
          required: true,
          error: false,
          errors: {
            required: ``
          }
        },
        name: {
          name: `email`,
          id: `question-name-1`,
          placeholder: `Ваше имя *`,
          footerInfo: ``,
          value: ``,
          required: true,
          error: false,
          errors: {
            required: ``
          }
        },
        showForm: true,
      },
      computed: {
        hasError() {
          if (this.email.error) {
            return true;
          }

          if (this.name.error) {
            return true;
          }

          return false;
        }
      },
      methods: {
        /**
         * Отправка формы
         */
        onSubmitForm() {
          this.hasError = false;

          this.$refs.questionEmail.onBlur();
          this.$refs.questionName.onBlur();

          this.hasError = this.hasError ? true : this.email.error;
          this.hasError = this.hasError ? true : this.name.error;

          if (!this.hasError) {
            window.popups.close(`subscribe`);
            window.popups.open(`subscribe-send`);
            window.API.other.onSendSubscribeForm(
              {
                email: this.email.value,
                name: this.name.value,
              },
              this.callbackSubscribe
            );
          }
        },

        /**
         * Колбек для формы
         *
         * Просто закрывает попап
         *
         */
        callbackSubscribe(param) {
          this.email.value = ``;
          this.name.value = ``;
          if (param.success) {
            setTimeout(() => {
              window.popups.close(`subscribe-send`);
            }, 15000);
          } else if (param.errors) {
            param.errors.forEach((error) => {
              switch (error) {
                case `email` :
                  this.reg.email.error = true;
                  break;
              }
            });
            window.popups.close(`subscribe-send`);
          }
        }
      }
    });
  }
};
