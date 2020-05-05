<template>
  <router-link :to="path">
    <div
      class="tile"
      :style="backgroundStyles(region.img)"
      v-on:mouseover="over"
      v-on:mouseleave="over"
    >
      <div class="tile__overlay" :class="{ tile__hover: hover }"></div>
      <h1>{{ region.name }}</h1>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HomeTile",
  props: ["region"],
  data() {
    return {
      path: "region/" + this.region.name,
      hover: false,
    };
  },
  computed: {
    background() {
      return { "background-image": 'url("' + this.region.img + '")' };
    },
  },
  methods: {
    backgroundStyles(image) {
      return {
        "background-image": `url(${require("../assets/" + image)})`,
      };
    },
    over() {
      this.hover = !this.hover;
      console.log(this.hover);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";
a {
  height: 300px;
  @include flex(center, stretch, column);
  position: relative;
}
.tile {
  h1 {
    pointer-events: none;
    z-index: 2;
  }
  @include fill(100%, 100%);
  @include flex(center, stretch, column);
  @include background(cover, center);
  color: #fff;
  text-shadow: 2px 2px rgb(15, 67, 15);
  min-height: 300px;
  border: 3px solid #000;
  &__overlay {
    @include fill(300px, 100%);
    position: absolute;
    pointer-events: none;
    opacity: 0;
  }
  &__hover {
    opacity: 1;
    transition: 0.25s;
    background-color: rgba(0, 0, 0, 0.652);
  }
}
</style>
