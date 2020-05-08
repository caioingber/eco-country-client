<template>
  <section class="country">
    <div class="country__card">
      <div class="country__tile">
        <CountryTile :country="country" />
      </div>
      <div class="country__report">
        <div class="category">Population</div>
        <div class="value">
          {{ country.country.population }}
        </div>
        <div class="category">GDP Per Capita ($USD)</div>
        <div class="value">
          {{ country.gdpPerCapita }}
          <span v-if="scoreGdp" class="pass">&#x2714; </span>
          <span v-else class="fail"> &times;</span>
        </div>
        <div class="category">HDI</div>
        <div class="value">
          {{ country.hdi }}
          <span v-if="scoreHdi" class="pass">&#x2714;</span>
          <span v-else class="fail"> &times;</span>
        </div>
        <div class="category">Gini</div>
        <div class="value">
          {{ country.country.gini }}
          <span v-if="scoreGini" class="pass">&#x2714; </span>
          <span v-else class="fail"> &times;</span>
        </div>
        <div class="category">Biocapacity Reserve</div>
        <div class="value">
          {{ country.biocapacityReserve }}
          <span v-if="scoreBio" class="pass">&#x2714; </span>
          <span v-else class="fail"> &times;</span>
        </div>
        <div class="category">Grade:</div>
        <div class="value grade" :class="{ grade__fail: styleGrade }">
          {{ grade }}
        </div>
      </div>
    </div>
    <router-link :to="back">back to region</router-link>
  </section>
</template>

<script>
import CountryTile from "../components/CountryTile";
import "@/global.scss";
export default {
  components: { CountryTile },
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
    scoreGini() {
      return this.country.country.gini > 50 ? true : false;
    },
    scoreHdi() {
      return this.country.hdi > 0.7 ? true : false;
    },
    scoreBio() {
      return this.country.biocapacityReserve >= 0 ? true : false;
    },
    scoreGdp() {
      let gdp = this.country.gdpPerCapita;
      if (gdp) {
        gdp = parseFloat(
          gdp
            .substring(1)
            .split(",")
            .join("")
        );
      }
      return gdp > 17100 ? true : false;
    },
    grade() {
      let categories = [
        this.scoreGini,
        this.scoreHdi,
        this.scoreBio,
        this.scoreGdp,
      ];
      let score = 0;
      categories.forEach((cat) => (cat ? score++ : null));
      let grades = ["F", "D", "C", "B", "A"];
      let grade = grades[score];
      return grade;
    },
    styleGrade() {
      let fail;
      if (this.grade == "D" || this.grade == "F") {
        fail = true;
      }
      return fail;
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
  &__report {
    border: 1px solid $primary;
    box-shadow: $shadow;
    @include mobile {
      width: 90%;
    }
    @include tablet {
      width: 75%;
    }
    width: 50%;
    @include grid(6, 6);
    & > * {
      @include flex(center, center, row);
      border: 1px solid $primary;
      padding: 0.5em;
    }
    .category {
      grid-column: 1 / span 3;
    }
    .value {
      grid-column: 4 / span 3;
      .fail,
      .pass {
        padding-left: 10px;
      }
      .pass {
        font-size: 20px;
        color: $secondary;
      }
      .fail {
        font-size: 30px;
        color: $danger;
      }
    }
    .grade {
      color: $secondary;
      font-weight: 700;
      font-size: 20px;
      &__fail {
        color: $danger;
      }
    }
  }
}
</style>
