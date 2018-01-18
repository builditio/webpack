<template>
<v-app>
  <navigator v-if="isLoggedIn" />
  <app-bar v-if="isLoggedIn" />
  <v-content :class="contentClass" class="grey lighten-4">
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
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
    contentClass () {
      return (this.isLoggedIn ? '' : 'login')
    }
  }
}
</script>

<style>
.login {
  background: url(/static/bkgd.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media only screen and (max-width: 599px) {
  .container {
      padding: 8px;
  }
}
</style>
