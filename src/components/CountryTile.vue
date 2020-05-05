<template>
  <router-link :to="path">
    <div>
      <p>{{ country.country.name }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
  data() {
    return {
      path: this.$route.fullPath + "/country/" + this.country.country.name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
