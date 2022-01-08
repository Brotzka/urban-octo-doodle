<template>
  <v-app>

    <v-app-bar
        v-if="isLoggedIn"
        app
        color="primary"
    >
    </v-app-bar>
    <v-main>
      <v-container>
        <HelloWorld/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import store from './store/store'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

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
