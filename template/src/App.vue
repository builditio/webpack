<template>
<v-app>
  <app-bar />
  <navigator />
  <v-content>
    <router-view></router-view>
  </v-content>
  <snackbar />
</v-app>
</template>

<script>
import AppBar from './components/core/AppBar.vue'
import Navigator from './components/core/Navigator.vue'
import Snackbar from './components/core/Snackbar.vue'

export default {
  components: {
    AppBar,
    Navigator,
    Snackbar
  },
  data: () => ({
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
