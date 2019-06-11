<template>
  <header class="gallery">
      <img
        src="../img/baked-goods-cake-close-up-998237.jpg"
        class="gallery__img"
      >
      
  </header>
</template>

<script>
// import Nav from "./Nav";

export default {
  name: "Gallery",
  // components:{
  //   Nav
  // },
  props: ["totalNews"]
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_gallery.css";
</style>
