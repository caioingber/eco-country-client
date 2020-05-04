<template>
  <div>
    <div v-for="(location, i) in countries" :key="i">
      {{ location.country.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Region",
  data() {
    return {
      localUrl: "http://localhost:8000/ecos",
      countries: [],
    };
  },
  computed: {
    regionData() {
      let regionUrl;
      if (this.$route.params.region === "All") {
        regionUrl = this.localUrl;
      } else {
        regionUrl = this.localUrl + `?region=${this.$route.params.region}`;
      }
      return regionUrl;
    },
  },
  created() {
    fetch(this.regionData)
      .then((res) => res.json())
      .then((data) => (this.countries = data));
  },
};
</script>

<style lang="scss" scoped></style>
