import * as types from '../mutation-types'

// initial state
const state = {
  snackbarVisible: false,
  snackbarText: null,
  snackbarColor: null
}

// getters
const getters = {
  snackbarVisible: state => state.snackbarVisible,
  snackbarText: state => state.snackbarText,
  snackbarColor: state => state.snackbarColor
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
  [types.SHOW_SNACKBAR] (state, payload) {
    state.snackbarText = payload.text
    state.snackbarVisible = true
    state.snackbarColor = payload.color
  },
  [types.HIDE_SNACKBAR] (state) {
    state.snackbarText = null
    state.snackbarVisible = false
    state.snackbarColor = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
