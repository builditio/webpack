<template>
<v-container class="fill-height">
  <v-layout row align-center>
    <v-flex md6 offset-md3>
      <v-card>
        <v-progress-linear :indeterminate="inProgress"></v-progress-linear>
        <div class="pt-5 pl-5 pr-5 mb-0">
          <img src="static/logo.png" height=40 />
        </div>

        <v-card-title  class="pl-5 pr-5">

          <div>
            <h3 class="headline mb-1">Welcome \{{ firstName }},</h3>
            <div  style="min-height: 36px;"><v-avatar size="28px" slot="activator">
              <img src="https://avatars3.githubusercontent.com/u/91428?s=460&v=4" alt="">
            </v-avatar>
            <span class="pl-2">
              \{{ email }}
            </span>
            </div>
          </div>
        </v-card-title>
        <div class="pa-5">
          <v-text-field
            :append-icon="visibile ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (visibile = !visibile)"
            :type="visibile ? 'text' : 'password'"
            label="Enter your password"
            v-model="password"
            @keyup.enter="signIn"
            ref="passwordInput"
          ></v-text-field>
        </div>
        <v-card-actions class="mr-5 ml-5 pb-5">
          <v-btn
            flat
            color="primary"
            >Forgot Password?</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="signIn"
            :disabled="password === null || password === ''"
          >
            Next
          </v-btn>
        </v-card-actions>
      </v-card>
      <copyright />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import endpoints from '../../../config/endpoints'
import snackbar from '../../helpers/snackbar'
import Copyright from '../core/Copyright'

export default {
  name: 'enter-password',
  components: {
    Copyright
  },
  data () {
    return {
      failed: false,
      valid: false,
      visibile: false,
      inProgress: false,
      password: null,
      token: null
    }
  },
  computed: {
    ...mapGetters({
      redirectUrl: 'redirectUrl',
      firstName: 'firstName',
      email: 'email',
      username: 'username'
    }),
    authEndpoint () {
      return endpoints[process.env.NODE_ENV].ms_auth
    }
  },
  methods: {
    ...mapActions({
      logIn: 'logIn',
      setToken: 'setToken'
    }),
    signIn () {
      this.inProgress = true
      var me = this

      // perform the login functions
      axios.post(me.authEndpoint + 'validate-credentials', {
        login: me.username,
        password: me.password
      })
      .then(response => {
        me.logIn()
        me.token = response.data.token
        me.$cookies.set('token', me.token)
        if (me.redirectUrl !== undefined && me.redirectUrl !== null) {
          window.location.href = me.redirectUrl
        } else {
          me.$router.push('/sample-one')
        }
      })
      .catch(error => {
        console.log('error', error)
        snackbar.show('Incorrect credentials, please try again')
        me.inProgress = false
        me.$router.push('/sample-one')
      })
    },
    back () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.$refs.passwordInput.focus()
  }
}
</script>

<style scoped>
.progress-linear__background {
  background-color: transparent !important;
}
</style>
