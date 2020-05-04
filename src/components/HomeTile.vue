<template>
  <router-link :to="path">
    <div class="tile">
      {{ region.name }}
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

<style lang="scss" scoped></style>
