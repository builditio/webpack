<template>
<v-toolbar :color="theme" dark app clipped-left fixed>
  <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
    <v-toolbar-side-icon @click.stop="toggleNavigator"></v-toolbar-side-icon>
    <span class="hidden-xs-only">\{{ title }}</span>
  </v-toolbar-title>
  <div class="d-flex align-center" style="margin-left: auto">
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon @click="sayHello()">
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-btn icon>
      <v-avatar size="24px" tile>
        <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify">
      </v-avatar>
    </v-btn>
  </div>
</v-toolbar>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
import Snackbar from '@/helpers/snackbar'

export default {
  name: 'app-bar',
  methods: {
    ...mapActions([
      'toggleNavigator',
      'toggleChooser',
      'logOut'
    ]),
    sayHello () {
      Snackbar.show('Well hello there, this is a snackbar!' )
    }
  },
  computed: {
    ...mapGetters({
      title: 'title',
      theme: 'theme'
    })
  }
}
</script>
