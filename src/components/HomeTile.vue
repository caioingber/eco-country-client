<template>
  <router-link :to="path">
    <div
      class="tile"
      :style="backgroundStyles(region.img)"
      v-on:mouseover="over"
      v-on:mouseleave="over"
    >
      <div
        class="tile__overlay"
        :class="{ tile__hover: hover, tile__remove: !hover }"
      ></div>
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

.tile {
  h1 {
    pointer-events: none;
    z-index: 2;
  }
  @include fill(100%, 100%);
  @include flex(center, stretch, column);
  @include background(cover, center);
  color: #fff;
  text-shadow: 2px 2px $primary;
  min-height: 300px;
  border: 3px solid #000;
  position: relative;
  overflow: hidden;
  &__overlay {
    @include fill(100%, 100%);
    position: absolute;
    top: -100%;
    pointer-events: none;
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &__hover {
    transform: translateY(100%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-color: $primary-faded;
  }
  &__remove {
    transform: translateY(-100%);
    background-color: $primary-faded;
  }
}
</style>
