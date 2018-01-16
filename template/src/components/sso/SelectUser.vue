<template>
<v-container class="fill-height">
  <v-layout row align-center>
    <v-flex md6 offset-md3>

      <v-card>
        <v-progress-linear :indeterminate="inProgress"></v-progress-linear>
        <div class="pt-5 pl-5 pr-5 mb-0">
          <img src="static/logo.png" height=40 />
        </div>

        <v-card-title class="pl-5 pr-5">
          <div>
            <h3 class="headline mb-1">Sign in</h3>
            <div style="min-height: 36px;">to continue to the <span style="font-weight: 500;">Sample Cloud Platform</span></div>
          </div>
        </v-card-title>
        <div class="pa-5">
          <v-text-field label="Enter your email address" v-model="uname" @keyup.enter="validateEmail" ref="emailInput"></v-text-field>
        </div>
        <v-card-actions class="mr-5 pb-5">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="validateEmail" :disabled="uname === null || username === ''">Next
          </v-btn>

        </v-card-actions>
      </v-card>
      <copyright />

    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
import axios from 'axios'
import snackbar from '../../helpers/snackbar'
import Copyright from '../core/Copyright'
const endpoints = require('../../../config/endpoints')

export default {
  name: 'select-user',
  components: {
    Copyright
  },
  data () {
    return {
      failed: false,
      valid: false,
      inProgress: false
    }
  },
  computed: {
    ...mapGetters({
      username: 'username'
    }),
    uname: {
      get () {
        return this.username
      },
      set (uname) {
        this.setUsername(uname)
      }
    },
    authEndpoint () {
      return endpoints[process.env.NODE_ENV].ms_auth
    }
  },
  methods: {
    ...mapActions({
      setUsername: 'setUsername',
      setEmail: 'setEmail',
      setFirstName: 'setFirstName',
      setRedirectUrl: 'setRedirectUrl'
    }),
    validateEmail () {
      var router = this.$router
      var me = this
      me.inProgress = true

      axios.post(me.authEndpoint + 'validate-login', {
        login: me.username
      })
        .then(response => {
          var data = response.data.data
          me.setUsername(me.username)
          me.setEmail(data.email)
          me.setFirstName(data.firstName)
          router.push({
            path: '/enter-password'
          })
        })
        .catch(error => {
          console.log(error)
          snackbar.show('Oops, we could not find the supplied user')
          me.inProgress = false

          // TEMP
          me.setUsername('jihaia')
          me.setEmail('jason@ihaia.com')
          me.setFirstName('Jason')
          router.push({
            path: '/enter-password'
          })
        })
    },
    fetchRedirectUrl () {
      this.setRedirectUrl(this.$route.query.redirectUrl)
    }
  },
  mounted () {
    this.$refs.emailInput.focus()
    this.fetchRedirectUrl()
  }
}
</script>

<style unscoped>
.progress-linear__background {
  background-color: transparent !important;
}
</style>
