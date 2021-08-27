<template>
  <v-main>
    <v-img
      height="100vh"
      src="/src/assets/web/welcome.jpg"
      class="black p-0"
      style="background-position: fixed"
    >
      <template v-slot:default>
        <v-row
          class="fill-height ma-0 bc-gradient"
          align="center"
          justify="space-around"
        >
          <v-spacer class="d-none d-md-flex"></v-spacer>

          <v-card
            color="transparent"
            flat
            max-width="375px"
            min-width="250px"
            width="75vw"
          >
            <icon-logo :fill="iconColor"></icon-logo>

            <v-card-text
              class="welcome-card-text title white--text mt-3 pa-0"
              style="opacity: 0.8"
            >
              Agile, Impactful, Valuable.
            </v-card-text>
          </v-card>

          <v-spacer class="d-none d-md-flex"></v-spacer>

          <v-card
            flat
            color="red"
            class="d-none d-md-flex w-50 pa-0 ma-0 align-self-end"
            rounded="0"
            max-height="90vh"
            elevation="0"
          >
          </v-card>
          <v-btn
            icon
            dark
            class="mx-auto align-self-end mb-5"
            absolute
            @click="busEmit('menu:go', chevronDown)"
          >
            <v-icon> mdi-chevron-down </v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-img>
  </v-main>
</template>

<script>
import { bus } from "../../bus";
import IconLogo from "../ui/icons/logo.vue";
export default {
  components: {
    IconLogo,
  },
  data: () => ({
    chevronDown: {
      to: "about",
    },
    iconColor: "white",
  }),
  methods: {
    busEmit(name, data = null) {
      bus.$emit(name, data);
    },
  },
};
</script>

<style scoped>
.bc-gradient {
  background: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
}

/* v-image__image v-image__image--cover */
/* to top left, rgba(37, 45, 65,0.5), rgba(63, 71, 89,0.5) */
</style>
