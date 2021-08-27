<template>
  <v-app>
    <app-bar />
    <drawer v-if="false" />
    <transition :name="transitionName" mode="out-in">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
import { bus } from "./bus";
import AppBar from "./components/ui/AppBar.vue";
import Drawer from "./components/ui/Drawer.vue";
export default {
  name: "App",
  components: {
    AppBar,
    Drawer,
  },
  data: () => ({
    rvid: 0,
    transitionName: "slide-down",
  }),
  methods: {
    onResize() {},
  },
  beforeDestroy() {
    if (typeof window === "undefined") return;
    window.removeEventListener("resize", this.onResize, { passive: true });
  },
  created() {},
  mounted() {
    // Router Transitions
    this.$router.beforeEach((to, from, next) => {
      let toDepth = to.meta.depth;
      let fromDepth = from.meta.depth;
      this.rvid++;
      bus.$emit("key:update", this.rvid);
      this.transitionName = toDepth < fromDepth ? "slide-down" : "slide-up";
      next();
    });
    // Resize
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
<style scoped>
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-200vh);
}
.slide-up-leave-to,
.slide-down-enter {
  opacity: 0;
  transform: translateY(-100vw);
}
.slide-down-leave-to,
.slide-up-enter {
  opacity: 0;
  transform: translateY(100vw);
}

.slide-enter-active,
.slide-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
</style>
