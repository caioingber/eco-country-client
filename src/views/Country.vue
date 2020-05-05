<template>
  <div class="country">
    <h1>{{ country.country.name }}</h1>
  </div>
</template>

<script>
export default {
  name: "Country",
  computed: {
    country() {
      let filtered = this.$store.state.countries.filter(
        (country) => country.country.name == this.$route.params.country
      );
      return filtered[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
