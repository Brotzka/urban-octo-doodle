import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors'

Vue.use (Vuetify);

export default new Vuetify ({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blueGrey.base,
        secondary: colors.brown.base,
        accent: colors.teal.base,
        error: colors.red.base,
        warning: colors.orange.base,
        info: colors.blue.base,
        success: colors.green.base,
        anchor: colors.blueGrey.base,
      }
    }
  }
});
