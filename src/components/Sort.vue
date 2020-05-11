<template>
  <div class="filter">
    <label for=""
      >Sort By:
      <select v-model="sortBy">
        <option value="name">Name</option>
        <option value="reserve">Bio Reserve</option>
        <option value="gdp">GDP Per Capita</option>
        <option value="gini">Gini</option>
      </select>
    </label>
    <label for=""
      >Order:
      <select v-model="order">
        <option value="asc">&#8593;</option>
        <option value="desc">&#8595;</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "Sort",
  computed: {
    sortBy: {
      set(sortBy) {
        this.$store.dispatch("updateSortBy", sortBy);
      },
      get() {
        return this.$store.getters.getSortBy;
      },
    },
    order: {
      set(order) {
        this.$store.dispatch("updateOrder", order);
      },
      get() {
        return this.$store.getters.order;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.filter {
  label {
    margin-right: 5px;
  }
}
</style>
