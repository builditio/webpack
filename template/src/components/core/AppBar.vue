<template>
<v-toolbar color="blue darken-3" dark app clipped-left fixed>
  <v-toolbar-title :style="$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'" class="ml-0 pl-3">
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <span class="hidden-xs-only">Application Title</span>
  </v-toolbar-title>
  <div class="d-flex align-center" style="margin-left: auto">
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" tile>
        <img src="https://vuetifyjs.com/static/doc-images/logo.svg" alt="Vuetify">
      </v-avatar>
    </v-btn>
  </div>
</v-toolbar>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {}
  },
  methods: {
  }
}
</script>
