<template>
  <div class="home">
    <HomeTile v-for="(region, i) in regions" :key="i" :region="region" />
  </div>
</template>

<script>
import HomeTile from "@/components/HomeTile.vue";

export default {
  name: "Home",
  data() {
    return {
      regions: [
        {
          name: "Americas",
          img: "",
        },
        {
          name: "Europe",
          img: "",
        },
        {
          name: "Oceania",
          img: "",
        },
        {
          name: "Africa",
          img: "",
        },
        {
          name: "Asia",
          img: "",
        },
        {
          name: "All",
          img: "",
        },
      ],
    };
  },
  components: {
    HomeTile,
  },
};
</script>

<style lang="scss" scoped>
@import "../global.scss";
.home {
  min-height: 80vh;
  @include grid(2, 3, 0);
}
</style>
