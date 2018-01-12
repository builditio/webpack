import store from '../store/index'

export default {
  show (msg) {
    store.dispatch('showSnackbar', msg)
  }
}
