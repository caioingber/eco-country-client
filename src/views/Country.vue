<template>
  <section class="country">
    <Loading v-if="$store.state.countries.length <= 0"></Loading>
    <div class="country__card">
      <div class="country__tile">
        <CountryTile :country="country" />
      </div>
      <Report :country="country" />
    </div>
    <router-link :to="back">back to region</router-link>
  </section>
</template>

<script>
import Loading from "../components/Loading";
import Report from "../components/Report";
import CountryTile from "../components/CountryTile";
import "@/global.scss";
export default {
  components: { CountryTile, Report, Loading },
  name: "Country",
  data() {
    return {
      color: "red",
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.country {
  // padding: 30px 0;
  @include flex(center, center, column);
  a {
    display: block;
    @include button(10px, rgb(26, 26, 220));
    margin: 50px 0;
  }
  &__card {
    @include flex(center, center, row);
    width: 100%;
    @include tablet {
      @include flex(center, center, column);
    }
  }
  &__tile {
    pointer-events: none;
    transform: scale(1.2);
    font-size: 20px;
    margin-right: 50px;
    @include tablet {
      margin: 50px 0;
    }
    @include mobile {
      transform: scale(1);
    }
  }
}
</style>
