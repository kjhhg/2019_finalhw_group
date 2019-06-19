<template>
  <header class="gallery">
      <div class="sol1">眼裡只有你</div>
      <img
        src="../img/baked-goods-cake-close-up-998237.jpg"
        class="gallery__img"
      >
      <div class="sol2">甜在我心裡</div>
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

.sol1{
  font-family: '微軟正黑體';
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  font-size: 30px;
  font-weight: bold;
  color: white;
  align-self: flex-start;
  justify-self: flex-start;
  z-index: 100;
  position: relative;
}
.sol1::after{
    border-top: 3px solid white;
    content: "";
    display: block;
    height: 1px;
    left: 110% ;
    position: absolute;
    top: 50%;
    width: 70%;
    height: 4px;
    z-index: 0;
}
.sol2{
  font-family: '微軟正黑體';
  font-size: 30px;
  font-weight: bold;
  color: white;
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  align-self: flex-end;
  justify-self: flex-end;
  z-index: 100;
  position: relative;
}
.sol2::before{
    border-top: 3px solid white;
    content: "";
    display: block;
    height: 1px;
    right: 110% ;
    position: absolute;
    top: 50%;
    width: 70%;
    height: 4px;
    z-index: 0;
}
</style>
