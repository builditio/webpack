import * as types from '../mutation-types'
import { $router } from '../../main'

// initial state
const state = {
  loggedIn: false,
  username: null,
  firstName: null,
  redirectUrl: null,
  email: null
}

// getters
const getters = {
  isLoggedIn: state => state.loggedIn,
  redirectUrl: state => state.redirectUrl,
  username: state => state.username,
  email: state => state.email,
  firstName: state => state.firstName
}

// actions
const actions = {
  logIn ({ commit }) {
    commit(types.LOG_IN)
  },
  logOut ({ commit }) {
    commit(types.LOG_OUT)
  },
  setRedirectUrl ({ commit }, url) {
    commit(types.SET_REDIRECT_URL, url)
  },
  setUsername ({ commit }, username) {
    commit(types.SET_USERNAME, username)
  },
  setEmail ({ commit }, email) {
    commit(types.SET_EMAIL, email)
  },
  setFirstName ({ commit }, firstName) {
    commit(types.SET_FIRST_NAME, firstName)
  }
}

// mutations
const mutations = {
  [types.LOG_IN] (state) {
    state.loggedIn = true
  },
  [types.LOG_OUT] (state) {
    state.loggedIn = false
    $router.push('/')
  },
  [types.SET_REDIRECT_URL] (state, url) {
    state.redirectUrl = url
  },
  [types.SET_USERNAME] (state, username) {
    state.username = username
  },
  [types.SET_EMAIL] (state, email) {
    state.email = email
  },
  [types.SET_FIRST_NAME] (state, firstName) {
    state.firstName = firstName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
