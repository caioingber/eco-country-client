<template>
  <router-link :to="path">
    <div
      class="tile"
      :style="backgroundStyles(country.country.flag)"
      @mouseenter="hoverFlag"
      @mouseleave="hoverFlag"
    >
      <div class="tile__overlay"></div>
      <div class="tile__slide"></div>
      <h3>{{ country.country.name }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
  data() {
    return {
      path: this.$route.fullPath + "/country/" + this.country.country.name,
      active: false,
    };
  },
  methods: {
    backgroundStyles(image) {
      return {
        "background-image": `url(${image})`,
      };
    },
    hoverFlag() {
      this.active = !this.active;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
a,
.tile,
.tile__overlay {
  border-radius: 100%;
}
.tile {
  @include fill(250px, 300px);
  @include background(cover, center);
  @include flex(center, center, column);
  margin: 10px;
  border: 2px solid $primary;
  position: relative;
  overflow: hidden;
  &__overlay {
    @include fill(100%, 100%);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.378);
  }
  &__slide {
    @include fill(100%, 100%);
    position: absolute;
    top: -100%;
  }
  h3 {
    color: #fff;
    text-shadow: 1px 1px $primary;
    z-index: 2;
  }
}
</style>
