<template>
  <v-main>
    <v-container fluid class="align-content-center pa-0 fill-height">
      <v-row no-gutters>
        <v-col cols="12" class="px-6 px-md-16">
          <div class="text-h4 text-md-h2 primary--text mt-5 mb-9 my-md-12">
            {{ $t("contact") }}
          </div>
        </v-col>
        <v-col cols="12">
          <v-img
            height="50vh"
            width="100vw"
            :src="require('/src/assets/web/contact.jpg')"
          >
            <v-container fluid fill-height class="pa-0 d-flex">
              <div
                class="
                  primary
                  white--text
                  text-h6 text-md-h4
                  mt-auto
                  flex-grow-1
                  text-center text-md-right
                  py-6
                  pr-md-16
                "
              >
                {{ $t("contact-1") }}
              </div>
            </v-container>
          </v-img>
        </v-col>
        <v-col cols="12" class="px-6 px-md-16 d-flex py-10">
          <v-btn
            color="grey darken-3"
            text
            class="mx-auto"
            href="mailto:info@unikk.com"
          >
            <v-icon class="mr-3"> mdi-email </v-icon>
            info@unikk.com
          </v-btn>
        </v-col>
        <v-col cols="12" class="d-flex">
          <span class="mx-auto text-caption">
            &copy;2021 - Unikk Ventures AG
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
