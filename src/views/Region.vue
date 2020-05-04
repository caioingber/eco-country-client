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
      localUrl: "http://localhost:8000/ecos?region=",
      countries: [],
    };
  },
  computed: {
    regionData() {
      return this.localUrl + `${this.$route.params.region}`;
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
