<template>
  <div id="app">
    <NavBar />
    <transition name="fade">
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
@import "@/global.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.fade-leave-active,
.fade-leave-to {
  min-height: 90vh !important;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
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
    background-color: $background;
  }
}
a {
  color: #000;
  text-decoration: none;
}
</style>
