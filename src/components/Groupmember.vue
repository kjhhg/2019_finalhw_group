<template>
  <section class="section">
    <h2 class="groupmember">團隊成員</h2>
    <img class="groupmember--picture1" src="../img/hsuan.jpg" alt="">
    <p class="groupmember--decr1">
      Project Planning <br>
      UI Design <br>
      Coding <br>
    </p>
    <img class="groupmember--picture2" src="../img/alan.jpg" alt="">
    <p class="groupmember--decr2">
      Project Planning <br>
      UI/UX Design <br>
      Coding <br>
    </p>
    <img class="groupmember--picture3" src="../img/ted.png" alt="">
    <p class="groupmember--decr3">
      Project Planning <br>
      DB Design <br>
      Coding <br>
    </p>

  </section>
</template>

<script>
// import NewsList from './NewsList';
//import { mapGetters } from 'vuex';

export default {
  name: "Groupmember",
  // components: {
  //   NewsList
  // },
  // computed: mapGetters([
  //     "socialNews", 
  //     "entertainmentNews", 
  //     "sportNews", 
  //     "taiwanNews"
  // ])
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";

.section{
  display: grid;
  grid-row: group-start / group-end;
  grid-column: full-start / full-end;

  grid-template-rows:
  [section-start]
  30px
  [title-start]
  min-content
  [title-end picture-start] 
  min-content
  [picture-end work-start] 
  minmax(10rem,1fr)
  [work-end]
  50px
  [section-end];

  grid-template-columns:
  [full-start] 
  minmax(2rem, 1fr)
  [center-start] 
  repeat(3, minmax(10rem, 1fr)) 
  [center-end] 
  minmax(2rem, 1fr) 
  [full-end];

  grid-gap: 5em;
  grid-column-gap: 5%;
  
  background-color: #FEEBD5;
  /* align-self: center;
  justify-self: center; */
}

.groupmember{
  font-family: '微軟正黑體';
  /* font-size: 30px; */
  font-weight: bold;
  color: #707070;
  display: grid;
  grid-row: title-start / title-end;
  grid-column: full-start / full-end;
  text-align: center;
  position: relative;

  &--picture1{
    height: 200px;
    width: auto;
    border-radius: 50%;
    display: grid;
    grid-row: picture-start / picture-end;
    grid-column: 2 / 3;
    align-self: center;
    justify-self: center;
  }
  &--picture2{
    height: 200px;
    width: auto;
    border-radius: 50%;
    display: grid;
    grid-row: picture-start / picture-end;
    grid-column: 3 / 4;
    align-self: center;
    justify-self: center;
  }
  &--picture3{
    height: 200px;
    width: auto;
    border-radius: 50%;
    display: grid;
    grid-row: picture-start / picture-end;
    grid-column: 4 / 5;
    align-self: center;
    justify-self: center;
  }

  &--decr1{
    height: 200px;
    color: #707070;
    font-size: 24px;
    display: grid;
    grid-row: work-start / work-end;
    grid-column: 2 / 3;
    text-align: center;
    align-self: center;
    justify-self: center;
  }
  &--decr2{
    height: 200px;
    color: #707070;
    font-size: 24px;
    display: grid;
    grid-row: work-start / work-end;
    grid-column: 3 / 4;
    text-align: center;
    align-self: center;
    justify-self: center;
  }
  &--decr3{
    height: 200px;
    color: #707070;
    font-size: 24px;
    display: grid;
    grid-row: work-start / work-end;
    grid-column: 4 / 5;
    text-align: center;
    align-self: center;
    justify-self: center;
  }
}
.groupmember::before {
    border-top: 3px solid#707070;
    content: "";
    display: block;
    height: 1px;
    left: 120%;
    position: absolute;
    top: 50%;
    width: 120%;
    height: 4px;
    z-index: 0;
}
.groupmember::after {
    border-top: 3px solid #707070;
    content: "";
    display: block;
    height: 1px;
    right: 120%;
    position: absolute;
    top: 50%;
    width: 120%;
    height: 4px;
    z-index: 0;
}
@media screen and (max-width:1080px ) {
  .groupmember::before {
    border-top: 3px solid#707070;;
    content: "";
    display: block;
    height: 1px;
    left: 110%;
    position: absolute;
    top: 50%;
    width: 100%;
    height: 4px;
    z-index: 0;
  }
  .groupmember::after {
      border-top: 3px solid #707070;;
      content: "";
      display: block;
      height: 1px;
      right: 110%;
      position: absolute;
      top: 50%;
      width: 100%;
      height: 4px;
      z-index: 0;
  }
}
</style>
