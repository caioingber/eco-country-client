<template>
  <div class="filter">
    <label for=""
      >Sort By
      <select v-model="search">
        <option value="name">Name</option>
        <option value="name">Reserve</option>
      </select>
    </label>
    <label for=""
      >Order
      <select v-model="order">
        <option value="asc">&#8593;</option>
        <option value="desc">&#8595;</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      sortBy: "name",
      order: "asc",
      search: "",
    };
  },
  computed: {},
  methods: {
    resortOptions() {},
    sortByNameAscending() {},
    sortByNameDescending() {},
  },
};
</script>

<style lang="scss" scoped></style>
