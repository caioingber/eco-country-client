<template>
  <div class="filter">
    <input type="text" v-model="filter" placeholder="insert" />
    <p>{{ filter }}</p>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      filter: "",
    };
  },
  computed: {
    filteredCountries() {
      return this.$store.state.countries.filter((country) =>
        country.country.name.includes(this.filter)
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
