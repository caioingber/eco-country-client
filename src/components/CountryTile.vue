<template>
  <div class="container">
    <div class="tile" :style="backgroundStyles(country.country.flag)">
      <div class="tile__overlay"></div>
      <h3>{{ country.country.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ["country"],
  data() {
    return {
      path: this.$route.fullPath + "/country/" + this.country.country.name,
      hover: false,
    };
  },
  methods: {
    backgroundStyles(image) {
      return {
        "background-image": `url(${image})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global.scss";
.container,
a,
.tile,
.tile__overlay {
  border-radius: 100%;
}
.container {
  overflow: hidden;
  margin: 10px;
  box-shadow: $shadow;
  border: 2px solid rgba(0, 0, 0, 0.74);
}
.tile {
  transition: 0.3s ease-out;
  @include fill(250px, 250px);
  @include background(cover, center);
  @include flex(center, center, column);
  position: relative;

  &:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in;
  }
  &__overlay {
    @include fill(100%, 100%);
    position: absolute;
    background-color: rgba(0, 0, 0, 0.378);
    &:hover {
      background-color: none;
    }
  }
  h3 {
    color: #fff;
    text-shadow: 1px 1px $primary;
    z-index: 2;
    width: 60%;
  }
}
</style>
