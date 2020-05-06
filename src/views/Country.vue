<template>
  <section class="country">
    <div class="country__card">
      <div class="country__tile">
        <CountryTile :country="country" />
      </div>
      <div class="country__report">
        <div class="category">Population</div>
        <div class="value">
          {{ country.country.population }} <span>&#x2714; </span>
        </div>
        <div class="category">GDP Per Capita ($USD)</div>
        <div class="value">{{ country.gdpPerCapita }}</div>
        <div class="category">HDI</div>
        <div class="value">{{ country.hdi }}</div>
        <div class="category">Gini</div>
        <div class="value">{{ country.country.gini }}</div>
        <div class="category">Biocapacity Reserve</div>
        <div class="value">{{ country.biocapacityReserve }}</div>
      </div>
    </div>
    <router-link :to="back">back to region</router-link>
  </section>
</template>

<script>
import CountryTile from "../components/CountryTile";
export default {
  components: { CountryTile },
  name: "Country",
  data() {
    return {
      giniScore: false,
      gdpScore: false,
      hdiScore: false,
      bioScore: false,
    };
  },
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
    scoreGini() {
      let gini = this.country.country.gini;
      return gini > 7 ? true : false;
    },
  },
  methods: {
    calculate(data) {
      switch (data) {
        case this.country.country.gini:
          data > 0.7 ? (this.giniScore = true) : (this.giniScore = false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.country {
  // padding: 30px 0;
  @include flex(center, center, column);
  &__card {
    @include flex(center, center, row);
    width: 100%;
    @include tablet {
      @include flex(center, center, column);
    }
  }
  &__tile {
    pointer-events: none;
  }
  &__report {
    border: 1px solid black;
    @include mobile {
      width: 90%;
    }
    @include tablet {
      width: 75%;
    }
    width: 50%;
    @include grid(5, 6);
    & > * {
      @include flex(center, center, row);
      border: 1px solid black;
      padding: 1em;
    }
    .category {
      grid-column: 1 / span 3;
    }
    .value {
      grid-column: 4 / span 3;
    }
  }
}
</style>
