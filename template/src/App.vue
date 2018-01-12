<template>
<v-app id="inspire">
  <navigator />
  <banner />
  <v-content>
    <router-view></router-view>
  </v-content>
</v-app>
</template>

<script>
import Banner from './components/core/Banner.vue'
import Navigator from './components/core/Navigator.vue'

export default {
  components: {
    Banner,
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
