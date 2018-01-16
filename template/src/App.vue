<template>
<v-app>
  <app-bar v-if="isLoggedIn" />
  <navigator  v-if="isLoggedIn" />
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
import { mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  }
}
</script>

<style>
.application.theme--light {
  background: url(/static/bkgd.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
