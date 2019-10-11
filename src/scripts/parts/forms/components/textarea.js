export const textareaInput = {
  template: `#vue-template-input-textarea`,
  delimiters: ['${', '}'],
  data() {
    return {
      focus: !!(this.params.value && this.params.value.length),
      errorMessage: ``,
      maxLength: 300,
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
  },
  computed: {
    curLength() {
      return this.params.value.length;
    }
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

        if (!this.params.value || !value.length) {
          this.focus = false;
          this.params.error = this.required;
          this.params.error ? this.errorMessage = `Введите что нибудь` : this.errorMessage = ``;
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
