import Vue from 'vue'
import Router from 'vue-router'

// Register components
import SampleOne from '@/components/SampleOne'
import SampleTwo from '@/components/SampleTwo'

Vue.use(Router)

export default new Router({
  routes: [
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
      component: SampleOne
    }
  ]
})
