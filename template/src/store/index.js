import Vue from 'vue'
import Vuex from 'vuex'

// Import each module
import layout from './modules/layout'
import security from './modules/security'
import navigation from './modules/navigation'
import notifications from './modules/notifications'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    layout,
    security,
    navigation,
    notifications
  },
  strict: debug
})
