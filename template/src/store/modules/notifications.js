import * as types from '../mutation-types'

// initial state
const state = {
  snackbarVisible: false,
  snackbarText: null
}

// getters
const getters = {
  snackbarVisible: state => state.snackbarVisible,
  snackbarText: state => state.snackbarText
}

// actions
const actions = {
  showSnackbar ({ commit, state }, text) {
    commit(types.SHOW_SNACKBAR, text)
  },
  hideSnackbar ({ commit, state }) {
    commit(types.HIDE_SNACKBAR)
  }
}

// mutations
const mutations = {
  [types.SHOW_SNACKBAR] (state, value) {
    state.snackbarText = value
    state.snackbarVisible = true
  },
  [types.HIDE_SNACKBAR] (state) {
    state.snackbarText = null
    state.snackbarVisible = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
