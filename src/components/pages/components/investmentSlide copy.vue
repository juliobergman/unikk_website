<template>
  <v-slide-group show-arrows center-active>
    <v-slide-item v-for="n in 15" :key="n">
      <v-card>
        <v-img
          width="200px"
          height="375px"
          :src="require('/src/assets/web/about.jpg')"
        ></v-img>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {};
</script>

<style></style>
