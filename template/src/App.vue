<template>
<v-app>
  <app-bar />
  <navigator />
  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
import Banner from './components/core/AppBar.vue'
import Navigator from './components/core/Navigator.vue'

export default {
  components: {
    AppBar,
    Navigator
  },
  data: () => ({
    dialog: false,
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    go: () => {

    }
  }
}
</script>
