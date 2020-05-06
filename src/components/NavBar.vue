<template>
  <nav>
    <router-link to="/"><h1>Eco Country Report Card</h1></router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
nav {
  @include flex(center, center, row);
  height: 50px;
  min-height: 10vh;
  background-color: #000;
  a {
    color: #fff;
    font-size: 25px;
    @include mobile {
      font-size: 16px;
    }
  }
}
</style>
