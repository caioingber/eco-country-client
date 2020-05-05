<template>
  <div class="region">
    <button v-if="!deficit" v-on:click="toggleReserve">
      {{ reserveText }}
    </button>
    <input type="text" v-model="search" />
    <button v-if="!reserve" v-on:click="toggleDeficit">
      {{ deficitText }}
    </button>
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
  data() {
    return {
      search: "",
      reserve: false,
      deficit: false,
      reserveText: "Reserve",
      deficitText: "Deficit",
    };
  },
  computed: {
    updateSearch() {
      let modified = this.search;
      if (this.search.length > 0) {
        modified = this.search[0].toUpperCase() + this.search.substring(1);
      }
      return modified;
    },
    regionCountries() {
      let filtered;
      if (this.$route.params.region == "All") {
        filtered = this.$store.state.countries;
      } else {
        filtered = this.$store.state.countries.filter(
          (country) => country.region === this.$route.params.region
        );
      }
      if (this.deficit) {
        filtered = filtered.filter(
          (country) => country.biocapacityReserve <= 0
        );
      }
      if (this.reserve) {
        filtered = filtered.filter((country) => country.biocapacityReserve > 0);
      }
      return filtered.filter((country) =>
        country.country.name.includes(this.updateSearch)
      );
    },
  },
  methods: {
    toggleReserve() {
      this.reserve = !this.reserve;
      this.reserve
        ? (this.reserveText = "Show All")
        : (this.reserveText = "Reserve");
    },
    toggleDeficit() {
      this.deficit = !this.deficit;
      this.deficit
        ? (this.deficitText = "Show All")
        : (this.deficitText = "Reserve");
    },
  },
};
</script>

<style lang="scss" scoped></style>
