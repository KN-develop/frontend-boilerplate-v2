export const emailInput = {
  template: `#vue-template-input-email`,
  delimiters: ['${', '}'],
  data() {
    return {
      focus: !!(this.params.value && this.params.value.length),
      errorMessage: ``,
    };
  },
  props: {
    params: {
      type: Object,
      required: true
    },
    placeholder: {
      type: String,
      default: ``
    },
    label: {
      type: String,
      default: ``
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    footerInfo() {
      return this.errorMessage ? this.errorMessage : this.params.footerInfo;
    },
  },
  methods: {
    onFocus() {
      this.focus = true;
      this.params.error = false;
      this.errorMessage = ``;
    },
    onBlur() {
      try {
        const value = this.params.value.replace(/\s+/g, ``);

        if (!value.length) {
          this.focus = false;
          this.params.error = this.required;
        } else {
          const reg = /\S+@+\S+\.\S{2,}/gmi;

          this.params.error = !reg.test(this.params.value);
          this.params.error ? this.errorMessage = `Введите корретный e-mail` : this.errorMessage = ``;
        }
      } catch (e) {
        this.focus = false;
        this.params.error = true;
      }
    },
    onClear() {
      this.params.value = ``;
    },
    /**
     * Обновляет компонент
     */
    updateData() {
      this.params.error = false;
      this.onBlur();
    },
    hasErrors() {
      this.params.error = false;
      this.onBlur();
    }
  }
};
