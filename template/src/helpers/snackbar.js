import store from '../store/index'

export default {
  show (msg, color) {
    store.dispatch('showSnackbar', {text: msg, color: color})
  }
}
