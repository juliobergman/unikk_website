import en from "../assets/i18n/en.json";
import de from "../assets/i18n/de.json";
import es from "../assets/i18n/es.json";

import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
export default new VueI18n({
  locale: localStorage.getItem("lang") || de,
  messages: {
    en: en,
    de: de,
    es: es,
  },
});
