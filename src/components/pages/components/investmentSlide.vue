<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col v-for="item in items" :key="item.title" cols="6" :md="item.colmd">
        <v-card dark>
          <v-img :aspect-ratio="10 / 7" :src="img(item.img)">
            <v-container
              fill-height
              fluid
              class="pa-0 d-flex align-content-end"
            >
              <v-container
                class="
                  title-container
                  text-caption text-md-body-1
                  pa-1
                  font-weight-medium
                  text-center
                "
              >
                {{ $t(item.title) }}
              </v-container>
            </v-container>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import images from "../../../assets/web/investment";
console.log(images.about);
export default {
  data: () => ({
    items: [
      {
        img: "stock",
        title: "investment-slide-1",
        colmd: "6",
      },
      {
        img: "early",
        title: "investment-slide-2",
        colmd: "6",
      },
      {
        img: "investment",
        title: "investment-slide-3",
        colmd: "4",
      },
      {
        img: "crypto",
        title: "investment-slide-4",
        colmd: "4",
      },
      {
        img: "direct",
        title: "investment-slide-5",
        colmd: "4",
      },
    ],
  }),
  methods: {
    img(image) {
      return images[image];
    },
  },
};
</script>

<style scoped>
.title-container {
  background: rgba(0, 0, 0, 0.5);
}
</style>
