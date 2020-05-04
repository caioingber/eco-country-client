<template>
  <div class="home">
    <HomeTile v-for="(region, i) in regions" :key="i" :region="region" />
  </div>
</template>

<script>
// @ is an alias to /src
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
