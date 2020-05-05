<template>
  <div class="filter">
    <input type="text" v-model="filter" placeholder="insert" />
    <p>{{ search }}</p>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {},
  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("updateSearch", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
