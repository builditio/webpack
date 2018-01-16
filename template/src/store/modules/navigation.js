import * as types from '../mutation-types'

// initial state
const state = {
  title: 'Application Title',
  titleDefault: 'Application Title',
  theme: 'blue darken-1'
}

// getters
const getters = {
  title: state => state.title,
  theme: state => state.theme
}

// actions
const actions = {
  setTitle ({ commit, state }, value) {
    commit(types.SET_TITLE, value)
  },
  resetTitle ({ commit, state }) {
    commit(types.RESET_TITLE)
  },
  setAllQuotes ({ commit, state }) {
    commit(types.SET_ALL_QUOTES)
  },
  setTemplates ({ commit, state }) {
    commit(types.SET_TEMPLATES)
  },
  setDownloads ({ commit, state }) {
    commit(types.SET_DOWNLOADS)
  },
  setGeneric ({ commit, state }, title) {
    commit(types.SET_GENERIC, title)
  }
}

// mutations
const mutations = {
  [types.SET_TITLE] (state, value) {
    state.title = value
  },
  [types.RESET_TITLE] (state) {
    state.title = state.titleDefault
  },
  [types.SET_ALL_QUOTES] (state) {
    state.title = 'Quotes'
    state.theme = 'red'
  },
  [types.SET_TEMPLATES] (state) {
    state.title = 'My Quotes'
    state.theme = 'cyan'
  },
  [types.SET_DOWNLOADS] (state) {
    state.title = 'Downloads'
    state.theme = 'warning'
  },
  [types.SET_GENERIC] (state, title) {
    state.title = title
    state.theme = 'blue-grey'
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
