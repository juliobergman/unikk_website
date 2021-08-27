import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../components/pages/welcome.vue";
import About from "../components/pages/about.vue";
import Investment from "../components/pages/investment.vue";
import Geofocus from "../components/pages/geofocus.vue";
import Contact from "../components/pages/contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    component: Welcome,
    name: "welcome",
    path: "/",
    meta: {
      depth: "0",
      darkLogo: true,
      darkBtn: true,
    },
  },
  {
    component: About,
    name: "about",
    path: "/about",
    meta: {
      depth: "1",
      darkLogo: false,
      darkBtn: true,
    },
  },
  {
    component: Investment,
    name: "investment",
    path: "/investment",
    meta: {
      depth: "2",
      darkLogo: false,
      darkBtn: false,
    },
  },
  {
    component: Geofocus,
    name: "geofocus",
    path: "/geofocus",
    meta: {
      depth: "3",
      darkLogo: false,
      darkBtn: false,
    },
  },
  {
    component: Contact,
    name: "contact",
    path: "/contact",
    meta: {
      depth: "4",
      darkLogo: false,
      darkBtn: false,
    },
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
