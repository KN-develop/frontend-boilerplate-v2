export const textInput = {
  template: `#vue-template-input-text`,
  delimiters: ['${', '}'],
  data() {
    return {
      focus: !!(this.params.value && this.params.value.length)
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
    errorMessage: {
      type: String,
      default: `Это поле должно быть заполнено`
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    footerInfo() {
      return this.params.error ? this.errorMessage : this.params.footerInfo;
    },
  },
  methods: {
    onFocus() {
      this.focus = true;
      this.params.error = false;
    },
    onBlur() {
      try {
        const value = this.params.value.replace(/\s+/g, ``);

        if (!this.params.value || !value.length) {
          this.focus = false;
          this.params.error = this.required;
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
