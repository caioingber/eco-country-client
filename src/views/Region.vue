<template>
  <section class="region">
    <div class="region__filters">
      <p>{{ regionCountries.length }} results</p>
      <button v-if="!deficit" v-on:click="toggleReserve">
        {{ reserveText }}
      </button>
      <input type="text" v-model="search" />
      <button v-if="!reserve" v-on:click="toggleDeficit">
        {{ deficitText }}
      </button>
    </div>
    <div class="region__container">
      <CountryTile
        v-for="(location, i) in regionCountries"
        :key="i"
        :country="location"
      />
    </div>
  </section>
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
      return this.search.toLowerCase();
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
        country.country.name.toLowerCase().includes(this.updateSearch)
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
        : (this.deficitText = "Deficit");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.region {
  @include flex(flex-start, center, column);
  &__container {
    margin: 0 5%;
    @include flex(space-around, center, row);
    flex-wrap: wrap;
  }
}
</style>
