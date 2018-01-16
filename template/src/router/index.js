import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

// Register components
import SelectUser from '@/components/sso/SelectUser'
import EnterPassword from '@/components/sso/EnterPassword'
// import ResetPassword from '@/components/ResetPassword'
// import UpdatePassword from '@/components/UpdatePassword'

import SampleOne from '@/components/SampleOne'
import SampleTwo from '@/components/SampleTwo'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/select-user',
      name: 'SelectUser',
      component: SelectUser,
      meta: { requiresAuth: false }
    },
    {
      path: '/enter-password',
      name: 'EnterPassword',
      component: EnterPassword,
      meta: {
        requiresAuth: false,
        requiresUser: true
      }
    },
    {
      path: '/sample-one',
      name: 'SampleOne',
      component: SampleOne
    },
    {
      path: '/sample-two',
      name: 'SampleTwo',
      component: SampleTwo
    },
    {
      path: '/',
      name: 'root',
      component: SelectUser,
      meta: { requiresAuth: false }
    }
  ]
})

/*
 * This guard is responsible for verifying the current request
 * is permitted. A request is considered not permitted if the route
 * requires authorization and the state determines no-one is
 * logged in. If not permitted, the route will redirect to the
 * sign-in route, otherwise it will pass-through to the originally
 * requested route.
 */
 router.beforeEach((to, from, next) => {
   var options = {}
   if (to.meta.requiresAuth === true || to.meta.requiresAuth === undefined) {
     // reroute to login if they are not logged in already
     if (!store.getters.isLoggedIn) {
       options = {path: '/'}
     }
   }

   var username = store.getters.username
   if (to.meta.requiresUser === true) {
     if (username === null || username === null) {
       options = {path: '/'}
     }
   }

   next(options)
 })

export default router
