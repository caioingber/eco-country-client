<template>
  <div class="region">
    <CountryTile
      v-for="(location, i) in regionCountries"
      :key="i"
      :country="location"
    />
  </div>
</template>

<script>
import CountryTile from "@/components/CountryTile.vue";

export default {
  name: "Region",
  components: { CountryTile },
  computed: {
    regionCountries() {
      if (this.$route.params.region == "All") {
        return this.$store.state.countries;
      } else {
        return this.$store.state.countries.filter(
          (country) => country.region === this.$route.params.region
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
