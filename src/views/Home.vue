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
          img: "americas.jpeg",
        },
        {
          name: "Europe",
          img: "europe.jpeg",
        },
        {
          name: "Oceania",
          img: "oceania.jpeg",
        },
        {
          name: "Africa",
          img: "africa.jpeg",
        },
        {
          name: "Asia",
          img: "asia.jpeg",
        },
        {
          name: "All",
          img: "earth.jpeg",
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
