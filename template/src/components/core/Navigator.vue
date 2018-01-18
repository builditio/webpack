<template>
<v-navigation-drawer fixed :clipped="$vuetify.breakpoint.width > 1264" app v-model="visibility" @input="trackChange" class="grey lighten-4">
  <v-list style="padding-top: 10px">

    <!-- Menu option 1 -->
    <v-list-tile @click="$router.push({name: 'SampleOne'})">
      <v-list-tile-action>
        <v-icon>dashboard</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="grey--text">
          Menu option one
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <!-- Menu option 2 -->
    <v-list-tile @click="$router.push({name: 'SampleTwo'})">
      <v-list-tile-action>
        <v-icon>replay</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="grey--text">
          Menu option two
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-divider dark />

    <!-- Menu option 3 -->
    <v-list-tile @click="$router.push({name: 'SampleOne'})">
      <v-list-tile-action>
        <v-icon>dashboard</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="grey--text">
          Menu option three
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <!-- Menu option 4 -->
    <v-list-tile @click="$router.push({name: 'SampleTwo'})">
      <v-list-tile-action>
        <v-icon>replay</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="grey--text">
          Menu option four
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
    trackChange (e) {
      if (this.navigatorVisible === true && e === false) {
        this.closeNavigator()
      }
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

<style>
  #keep main .container {
    height: 660px;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>
