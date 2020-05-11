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
  @include flex(center, center, row);

  label {
    margin-right: 10px;
  }
}
select {
  padding: 0.6em 1.4em 0.5em 0.8em;
  margin: 0;
  border: 1px solid #aaa;
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: $light;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
select::-ms-expand {
  display: none;
}
select:hover {
  border-color: #888;
}
select:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
select option {
  font-weight: normal;
}
</style>
