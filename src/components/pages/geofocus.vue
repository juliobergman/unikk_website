<template>
  <v-img
    height="100vh"
    min-width="100vw"
    position="30% center"
    :aspect-ratio="4 / 3"
    :src="require('/src/assets/web/map-comp.jpg')"
  >
    <v-container fluid fill-height class="d-flex">
      <div
        class="
          text-h4 text-md-h2
          white--text
          font-weight-medium
          mt-auto
          mb-10
          mx-auto
          mb-md-16
          ml-md-16
          mr-md-auto
        "
      >
        {{ $t("geofocus") }}
      </div>
    </v-container>
  </v-img>
</template>

<script>
export default {};
</script>

<style scoped>
.v-image {
  background-color: #000;
}
</style>
