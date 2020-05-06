<template>
  <div id="app">
    <NavBar />
    <transition name="slide" mode="out-in">
      <router-view class="view" />
    </transition>
    <Footer />
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export default {
  components: { NavBar, Footer },
  created() {
    this.$store.dispatch("loadCountries");
  },
};
</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-40%);
}
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
