<template>
  <div>
    {{ info.country.name }}
  </div>
</template>

<script>
export default {
  props: ["info"],
  name: "Country",
};
</script>

<style lang="sass" scoped></style>
