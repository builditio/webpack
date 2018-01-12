<template>
<v-navigation-drawer fixed clipped app v-model="drawer">
  <v-list style="padding-top: 10px">
    <v-list-tile @click="go">
      <v-list-tile-action>
        <v-icon>add</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          Menu option one
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>

<script>
export default {
  name: 'navigator',
  data () {
    return {
      drawer: true,
      items: []
    }
  },
  methods: {
    go () {
      console.log('go')
    }
  }
}
</script>
