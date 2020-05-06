<template>
  <div class="tile" :style="backgroundStyles(country.country.flag)">
    <div class="tile__overlay"></div>
    <h3>{{ country.country.name }}</h3>
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
a,
.tile,
.tile__overlay {
  border-radius: 100%;
}
.tile {
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  @include fill(250px, 250px);
  @include background(cover, center);
  @include flex(center, center, column);
  margin: 10px;
  border: 2px solid $primary;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: scale(1.1) rotateZ(360deg);
    transition: 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  }
}
</style>
