<template>
  <v-app>

    <v-app-bar
        v-if="isLoggedIn"
        app
        color="primary"
    >
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import store from './store/store'

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),

  computed: {
    isLoggedIn: () => {
      return store.getters.isLoggedIn
    }
  }
};
</script>
