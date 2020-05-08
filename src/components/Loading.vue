<template>
  <div class="loading">
    <h2>Loading...</h2>
    <img src="@/assets/load.png" alt="loading-globe" />
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
@keyframes infinite-spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading {
  @include flex(center, center, column);
  margin-top: 100px;
  img {
    margin-top: 25px;
    height: 150px;
    width: 150px;
    display: block;
    animation: infinite-spinning 3s infinite;
  }
}
</style>
