<template>
  <div class="country">
    <h1>{{ country.country.name }}</h1>
    <router-link :to="back">back to region</router-link>
  </div>
</template>

<script>
export default {
  name: "Country",
  computed: {
    country() {
      let filtered = this.$store.state.countries.filter(
        (country) => country.id == this.$route.params.id
      );
      return filtered[0];
    },
    back() {
      return "/region/" + this.$route.params.region;
    },
  },
};
</script>

<style lang="scss" scoped>
.country {
  padding: 30px 0;
}
</style>
