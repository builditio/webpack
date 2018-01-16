<template>
<v-toolbar :color="theme" dark app clipped-left absolute>
  <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
    <v-toolbar-side-icon v-if="$vuetify.breakpoint.width <= 1264" @click.stop="toggleNavigator"></v-toolbar-side-icon>
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
      <v-avatar size="36px">
        <img src="https://avatars3.githubusercontent.com/u/91428?s=460&v=4" alt="">
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
      Snackbar.show('Well hello there, this is a snackbar!')
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
