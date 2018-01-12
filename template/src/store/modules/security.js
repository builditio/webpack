import * as types from '../mutation-types'
import { $router } from '../../main'

// initial state
const state = {
  loggedIn: false
}

// getters
const getters = {
  isLoggedIn: state => state.loggedIn
}

// actions
const actions = {
  logIn ({ commit }) {
    commit(types.LOG_IN)
  },
  logOut ({ commit }) {
    commit(types.LOG_OUT)
  }
}

// mutations
const mutations = {
  [types.LOG_IN] (state) {
    state.loggedIn = true
  },
  [types.LOG_OUT] (state) {
    state.loggedIn = false
    this._vm.$cookies.remove('token')
    $router.go('/')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
