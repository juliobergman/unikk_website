<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    app
    dark
    temporary
    color="rgba(0,0,0,0.7)"
  >
    <v-list-item class="pa-10">
      <logo :fill="'white'" />
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="goto(item)"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { bus } from "../../bus";
import Logo from "./icons/logo.vue";
export default {
  components: {
    Logo,
  },
  data: () => ({
    drawer: false,
    selected: 0,
    items: [
      {
        text: "Home",
        icon: "mdi-view-dashboard",
        to: "welcome",
      },
      {
        text: "About Us",
        icon: "mdi-camera-iris",
        to: "about",
      },
      {
        text: "Investment Strategy",
        icon: "mdi-laptop",
        to: "investment",
      },
      {
        text: "Geographical focus",
        icon: "mdi-flask-outline",
        to: "geofocus",
      },
      {
        text: "Contact",
        icon: "mdi-account",
        to: "contact",
      },
    ],
  }),
  methods: {
    goto(item) {
      if (item.to == this.$router.currentRoute.name) {
        this.drawer = false;
        return;
      }
      this.$router.push({ name: item.to });
    },
  },
  created() {
    this.items.findIndex((element, index) => {
      if (element.to == this.$router.currentRoute.name) {
        this.selected = index;
      }
    });
    bus.$on("drawer:set", (payload) => {
      this.drawer = payload;
    });
    bus.$on("drawer:toggle", () => {
      this.drawer = !this.drawer;
    });
    bus.$on("menu:go", this.goto);
  },
};
</script>

<style></style>
