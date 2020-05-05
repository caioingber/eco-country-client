<template>
  <div>Test</div>
</template>

<script>
export default {
  props: ["info"],
  name: "Country",
  computed: {
    countryData() {
      return this.$store.state.countries;
    },
  },
};
</script>

<style lang="sass" scoped></style>
