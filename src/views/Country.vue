<template>
  <div>Test</div>
</template>

<script>
export default {
  props: ["info"],
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

<style lang="sass" scoped></style>
