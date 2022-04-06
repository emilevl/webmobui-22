export default {
  directives: {
    // enables v-focus in template
    form: {
      mounted(el) {
        el.focus()
      }
    }
  }
}