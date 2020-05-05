<template>
  <router-link :to="path">
    <div class="tile" :style="backgroundStyles(region.img)">
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
  },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";
.tile {
  @include flex(center, center, column);
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  color: #fff;
  text-shadow: 2px 2px rgb(15, 67, 15);
}
</style>
