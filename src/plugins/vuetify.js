import Vue from "vue";
import Vuetify from "vuetify";
import { colors } from "vuetify/lib";

Vue.use(Vuetify);

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#272727",
      },
      dark: {
        primary: "#272727",
      },
    },
  },
};

export default new Vuetify(opts);
