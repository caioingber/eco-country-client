<template>
  <section class="container">
    <Loading v-if="$store.state.countries.length <= 0"></Loading>
    <div v-else class="region">
      <h2>{{ this.$route.params.region }}</h2>
      <div class="region__filters">
        <button
          v-on:click="toggleReserve"
          class="reserve"
          :class="{ inactive: deficit }"
        >
          {{ reserveText }}
        </button>
        <input type="text" v-model="search" placeholder="Search..." />
        <button
          v-on:click="toggleDeficit"
          class="deficit"
          :class="{ inactive: reserve }"
        >
          {{ deficitText }}
        </button>
        <p>{{ regionCountries.length }} results</p>
      </div>
      <Sort />
      <div class="region__container">
        <div v-for="location in regionCountries" :key="location.id">
          <router-link :to="$route.fullPath + '/country/' + location.id">
            <CountryTile :country="location" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Loading from "../components/Loading.vue";
import CountryTile from "../components/CountryTile.vue";
import Sort from "../components/Sort";
export default {
  name: "Region",
  components: { CountryTile, Loading, Sort },
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
      filtered = filtered.filter((country) =>
        country.country.name.toLowerCase().includes(this.updateSearch)
      );

      return filtered;
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
.container {
  @include flex(flex-start, center, column);
}
.region {
  &__filters {
    p {
      margin-top: 10px;
    }
    .deficit {
      @include button(10px, $danger);
    }
    .reserve {
      @include button(10px, $secondary);
    }
    .inactive {
      pointer-events: none;
      opacity: 0;
    }
  }
  input {
    padding: 10px;
    font-size: 16px;
    margin: 0 5px;
    border: 2px solid gray;
    background-color: $light;
    border-radius: 5px;
    @include mobile {
      width: 45%;
    }
  }
  & > * {
    margin-bottom: 20px;
  }
  @include flex(flex-start, center, column);
  padding: 30px 0;
  &__container {
    margin: 0 5%;
    @include flex(space-around, center, row);
    flex-wrap: wrap;
  }
}
</style>
