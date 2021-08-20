import Vue from "vue";
import App from "./App.vue";
import Vuetify from "./plugins/vuetify";

new Vue({
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount("#app");
