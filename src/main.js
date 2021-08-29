import Vue from "vue";
import Vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import VueMobileDetection from "vue-mobile-detection";
Vue.use(VueMobileDetection);

import App from "./App.vue";

const app = new Vue({
  router,
  vuetify: Vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
