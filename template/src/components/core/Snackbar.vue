<template>
  <v-snackbar
    bottom
    multi-line
    v-model="isSnackbarVisible"
  >
    \{{ snackbarText }}
    <v-btn flat class="amber--text" @click.native.stop="hideSnackbar()">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'snackbar',
  props: [
  ],
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'hideSnackbar'
    ])
  },
  computed: {
    ...mapGetters({
      snackbarVisible: 'snackbarVisible',
      snackbarText: 'snackbarText'
    }),
    isSnackbarVisible: {
      get () {
        return this.snackbarVisible
      },
      set () {
        this.hideSnackbar()
      }
    }
  }
}
</script>

<style>
</style>
