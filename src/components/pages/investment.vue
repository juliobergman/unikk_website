<template>
  <v-main>
    <v-container fluid class="align-start fill-height pa-0 cont">
      <v-row no-gutters class="fill-height">
        <v-col order="1" order-md="0" cols="12" md="4">
          <v-img height="100%" src="/src/assets/web/about.jpg"></v-img>
        </v-col>
        <v-col order="1" order-md="0" cols="12" md="8">
          <v-container
            class="fill-height d-flex flex-column align-start px-16 pt-16"
          >
            <div class="text-h3 primary--text my-16">Investment Strategy</div>
            <div class="text-body-1">
              <p>
                Our investment strategy combines top-bottom and bottom-up
                approaches for the allocation of investment budgets in the
                different asset classes.
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
