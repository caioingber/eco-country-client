<template>
  <div>
    <div v-for="(country, i) in regionCountries" :key="i">
      {{ country.country.name }}
    </div>
    <!-- <CountryTile
      v-for="(location, i) in countries"
      :key="i"
      :country="location"
    /> -->
  </div>
</template>

<script>
// import CountryTile from "@/components/CountryTile.vue";
export default {
  name: "Region",
  computed: {
    regionCountries() {
      return this.$store.state.countries.filter(
        (country) => country.region === this.$route.params.region
      );
    },
  },
  created() {
    this.$store.dispatch("loadCountries");
  },
};
</script>

<style lang="scss" scoped></style>
