<template>
  <section >
    <div class="groupmember">------團隊成員------</div>
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

section{
  display: grid;
  grid-row: group-start / group-end;
  grid-column: full-start / full-end;
  grid-template-rows:
  [section-start]
  30px
  [title-start]
  minmax(5rem,1fr)
  [title-end picture-start] 
  min-content
  [picture-end work-start] 
  minmax(10rem,1fr)
  [work-end]
  50px
  [section-end];

  grid-template-columns:
  [full-start] 
  minmax(.5rem, 1fr)
  [center-start] 
  repeat(3, minmax(10rem, 1fr)) 
  [center-end] 
  minmax(.5rem, 1fr) 
  [full-end];

  grid-gap: 70px;
  grid-column-gap: 250px;
  
  background-color: #FEEBD5;
}

.groupmember{
  font-family: '微軟正黑體';
  font-size: 30px;
  font-weight: bold;
  color: #707070;
  display: grid;
  grid-row: title-start / title-end;
  grid-column: center-start / center-end;
  align-self: center;
  justify-self: center;

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
</style>
