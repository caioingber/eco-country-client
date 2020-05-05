<template>
  <router-link :to="path" :info="country">
    <div>
      <p>{{ country.country.name }}</p>
      <p>{{ country.country.region }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
  data() {
    return {
      path: "country/" + this.country.country.name,
    };
  },
};
</script>

<style lang="scss" scoped></style>
