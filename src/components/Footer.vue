<template>
  <footer>
    <p>
      <a href="https://caioingber.com/" target="_blank">Caio Ingber</a> 2020
      &copy; Built With Vue.js
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
footer {
  @include flex(flex-start, center, row);
  padding-left: 2rem;
  @include mobile {
    @include flex(center, center, row);
    padding-left: 0;
  }
  a {
    color: rgb(22, 179, 22);
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      color: rgb(16, 235, 221);
    }
  }
  min-height: 5vh;
  background-color: #000;
  color: #fff;
}
</style>
