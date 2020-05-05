<template>
  <router-link :to="path">
    <div class="tile">
      <h2>{{ region.name }}</h2>
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
};
</script>

<style lang="scss" scoped>
@import "../global.scss";
.tile {
  height: 100%;
  width: 100%;
  @include flex(center, center, column);
}
</style>
