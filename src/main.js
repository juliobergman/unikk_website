import Vue from "vue";
import Vuetify from "./plugins/vuetify";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";

const app = new Vue({
  router,
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount("#app");
