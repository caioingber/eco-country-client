<template>
  <div id="app">
    <div id="nav"><router-link to="/">Home</router-link> |</div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {},
  created() {
    this.$store.dispatch("loadCountries");
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: #000;
  text-decoration: none;
}

#nav {
  padding: 30px;
}
</style>
