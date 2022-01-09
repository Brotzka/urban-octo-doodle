<template>
  <v-container
      class="d-flex justify-center align-center flex-column"
      fill-height
  >
    <v-form ref="loginForm" v-model="formIsValid">
      <v-card
          class="mb-3"
          elevation="2"
          outlined
      >
        <v-card-title>Register</v-card-title>
        <v-card-text>

          <v-row>
            <v-col
                cols="12"
            >
              <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  label="Username"
                  required
              >
              </v-text-field>

              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  label="Password"
                  required
              >
              </v-text-field>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-btn
              class="mr-4"
              @click="submit"
          >
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

    <v-btn text to="/login">Stattdessen anmelden</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data: () => {
    return {
      username: "",
      usernameRules: [
        v => !!v || 'Username is required',
        v => v.length > 5 || 'Username must be longer than 5 characters'
      ],
      password: "",
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length > 10 || 'Password must be longer than 10 characters'
      ],
      email: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test (v) || 'E-mail must be valid',
      ],
      formIsValid: true
    }
  },

  methods: {
    submit () {
      this.formIsValid = this.$refs.loginForm.validate ()

      this.$http.get ('/sanctum/csrf-cookie').then (response => {

        console.log ("Cookie: ", response)

        this.$http.post ('register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
      })
    }
  },

  mounted () {

  }
}
</script>

<style scoped>

</style>
