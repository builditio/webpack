<template>
<v-navigation-drawer fixed clipped app v-model="visibility" @input="trackChange">
  <v-list style="padding-top: 10px">

    <!-- Menu option 1 -->
    <v-list-tile @click="go">
      <v-list-tile-action>
        <v-icon>dashboard</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          Menu option one
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <!-- Menu option 2 -->
    <v-list-tile @click="go">
      <v-list-tile-action>
        <v-icon>replay</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          Menu option two
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

  </v-list>
</v-navigation-drawer>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'navigator',
  data () {
    return {
      items: []
    }
  },
  methods: {
    ...mapActions([
      'closeNavigator',
      'openSettings'
    ]),
    trackChange(e) {
      if (this.navigatorVisible === true && e === false) {
        this.closeNavigator()
      }
    },
    go () {
      console.log('go')
    }
  },
  computed: {
    ...mapGetters({
      navigatorVisible: 'navigatorVisible'
    }),
    visibility: {
      get () {
        return this.navigatorVisible
      },
      set () {

      }
    }
  }
}
</script>
