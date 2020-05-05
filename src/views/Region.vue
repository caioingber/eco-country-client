<template>
  <div class="region">
    <Search />
    <CountryTile
      v-for="(location, i) in regionCountries"
      :key="i"
      :country="location"
    />
  </div>
</template>

<script>
import CountryTile from "@/components/CountryTile.vue";
import Search from "../components/Search.vue";
export default {
  name: "Region",
  components: { CountryTile, Search },
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
