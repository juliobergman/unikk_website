import Vue from "vue";
import VueRouter from "vue-router";

import Welcome from "../components/pages/welcome.vue";
import About from "../components/pages/about.vue";
import Investment from "../components/pages/investment.vue";
import Geofocus from "../components/pages/geofocus.vue";
import Earth from "../components/pages/geofocus2.vue";
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
      darkNavs: true,
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
      darkNavs: false,
    },
  },
  {
    component: Investment,
    name: "investment",
    path: "/investment",
    meta: {
      depth: "2",
      darkLogo: true,
      darkBtn: false,
      darkNavs: false,
    },
  },
  {
    component: Geofocus,
    name: "geofocus",
    path: "/geofocus",
    meta: {
      depth: "3",
      darkLogo: true,
      darkBtn: true,
      darkNavs: true,
    },
  },
  {
    component: Earth,
    name: "earth",
    path: "/earth",
    meta: {
      depth: "4",
      darkLogo: true,
      darkBtn: true,
      darkNavs: true,
    },
  },
  {
    component: Contact,
    name: "contact",
    path: "/contact",
    meta: {
      depth: "5",
      darkLogo: false,
      darkBtn: false,
      darkNavs: false,
    },
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
