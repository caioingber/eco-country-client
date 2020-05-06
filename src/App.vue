<template>
  <div id="app">
    <NavBar />
    <router-view class="view" />
    <Footer />
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  data() {},
  components: { NavBar, Footer },
  created() {
    this.$store.dispatch("loadCountries");
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: "Josefin Sans", Helvetica, Arial, sans-serif;
  text-align: center;
  .view {
    min-height: 85vh;
  }
}
a {
  color: #000;
  text-decoration: none;
}
</style>
