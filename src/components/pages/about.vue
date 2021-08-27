<template>
  <v-main>
    <v-container fluid class="align-start fill-height pa-0 cont">
      <v-row no-gutters class="fill-height">
        <v-col order="1" order-md="0" cols="12" md="8">
          <v-container
            class="fill-height d-flex flex-column align-start px-16 pt-16"
          >
            <div class="text-h3 primary--text my-16">About Us</div>
            <div class="text-body-1">
              <p>
                Unikk Ventures AG is a private investment firm incorporated in
                the Municipality of Baar, Canton of Zug, Switzerland. The direct
                investment approach prioritizes long-term value creation and
                entrepreneurial spirit, scalability, and innovation values. Our
                investments are divided into the four following asset Classes:
                Equity and debt securities, Private Equity through limited
                partnerships and direct investments, alternative investments,
                and Cryptocurrencies.
              </p>
              <p>
                Unikk Ventures AG also promotes the development of new highly
                scalable technological solutions. We invest and develop projects
                of great upside potential, focused on technological innovation,
                scalability, and social impact. we believe that we can create an
                impact in society, unconditionally supporting philanthropic
                activities that generate well-being for others.
              </p>
            </div>

            <v-btn
              class="mx-auto mt-auto mb-3"
              icon
              @click="busEmit('menu:go', chevronDown)"
            >
              <v-icon> mdi-chevron-down </v-icon>
            </v-btn>
          </v-container>
        </v-col>
        <v-col order="0" order-md="1" cols="12" md="4">
          <v-img height="100%" src="/src/assets/web/about.jpg"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { bus } from "../../bus";
export default {
  data: () => ({
    chevronDown: {
      to: "investment",
    },
  }),
  methods: {
    busEmit(name, data = null) {
      bus.$emit(name, data);
    },
  },
  mounted() {},
};
</script>

<style></style>
