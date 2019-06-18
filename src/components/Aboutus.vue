<template>
  <section >
    <div class="aboutus">--------  關於我們  --------</div>
    <p class="titleword">
      一群因為甜點而聚在一起的人們，創立了Sweet Time這個品牌<br>
      為了造福更多熱愛甜點的朋友們<br>
      Sweet Time決定踏入網路的世界
    </p>
    <img src="../img/Group 73@2x.png" class="titleimg" alt="">

    <img src="../img/Group 67@2x.png" class="decrimg1" alt="">
    <p class="decr1">
      不確定自己該怎麼歸類<br>
      也許分類都是多餘的<br>
      畢竟吃甜點想得到的<br>
      都只是舒心與幸福，不是嗎? <br>
      <br>
      所以我們會說，自己是自由式甜點吧!

    </p>

    <img src="../img/Group 66@2x.png" class="decrimg2" alt="">
    <p class="decr2">
      Sweet Time有著雙關的語意<br>
      一則是希望吃了我們的甜點<br>
      能給予您甜美的時光<br>
      二則是希望大家把甜點都食光!
    </p>

    <img src="../img/Group 53@2x.png" class="decrimg3" alt="">
    <p class="decr3">
      跳出忙碌的生活，吃點甜的喘口氣吧!<br>
      我們是Sweet Time<br>
      是你生活中的小小停靠站
    </p>
  </section>
</template>

<script>
// import NewsList from './NewsList';
//import { mapGetters } from 'vuex';

export default {
  name: "Aboutus",
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
  grid-row: aboutus-start / aboutus-end;
  grid-column: full-start / full-end;
  grid-template-rows:
  [section-start]
  min-content
  [title-start]
  minmax(5rem,1fr)
  [title-end titleword-start] 
  minmax(5rem,1fr)
  [titleword-end titleimg-start] 
  min-content 
  [titleimg-end gap-start]
   minmax(5rem,1fr)
  [gap-end decr1-start] 
  min-content
  [decr1-end decr2-start]
  min-content
  [decr2-end decr3-start]
  min-content
  [decr3-end]
  min-content
  [section-end];

  grid-template-columns:
  [full-start] 
  minmax(.5rem, 1fr)
  [center-start] 
  repeat(2, minmax(28rem, 1fr)) 
  [center-end] 
  minmax(.5rem, 1fr) 
  [full-end];

  grid-gap: 100px;

  background: linear-gradient(0deg, rgba(226, 242, 213, 1)0%, rgba(212, 237, 244, 1)100%); 
  background: -moz-linear-gradient(0deg, rgba(226, 242, 213, 1)0%, rgba(212, 237, 244, 1)100%); 
  background: -webkit-linear-gradient(0deg, rgba(226, 242, 213, 1)0%, rgba(212, 237, 244, 1)100%); 
  background: -o-linear-gradient(0deg, rgba(226, 242, 213, 1)0%, rgba(212, 237, 244, 1)100%); 
}

.aboutus{
  font-family: '微軟正黑體';
  font-size: 30px;
  font-weight: bold;
  color: #707070;
  display: grid;
  grid-row: title-start / title-end;
  grid-column: center-start / center-end;
  align-self: center;
  justify-self: center;
}
.titleword{
  font-family: '微軟正黑體';
  font-size: 24px;
  color: #707070;
  font-weight: bold;
  display: grid;
  grid-row: titleword-start / titleword-end;
  grid-column: center-start / center-end;
  align-self: center;
  justify-self: center;
  text-align: center;
}
.titleimg{
  display: grid;
  grid-row: titleimg-start / titleimg-end;
  grid-column: 2 / 4;
  align-self: center;
  justify-self: center;
  height: 600px;
  width: auto;
}
.decrimg1{
  display: grid;
  grid-row: decr1-start / decr1-end;
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
  height: 400px;
  width: auto;
}
.decr1{
  font-family: '微軟正黑體';
  font-size: 24px;
  color: #707070;
  font-weight: bold;
  display: grid;
  grid-row: decr1-start / decr1-end;
  grid-column: 3 / 4;
  align-self: center;
  justify-self: center;
  text-align: center;
}
.decrimg2{
  display: grid;
  grid-row: decr2-start / decr2-end;
  grid-column: 3 / 4;
  align-self: center;
  justify-self: center;
  height: 400px;
  width: auto;
}
.decr2{
  font-family: '微軟正黑體';
  font-size: 24px;
  color: #707070;
  font-weight: bold;
  display: grid;
  grid-row: decr2-start / decr2-end;
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
  text-align: center;
}
.decrimg3{
  display: grid;
  grid-row: decr3-start / decr3-end;
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
  height: 400px;
  width: auto;
}
.decr3{
  font-family: '微軟正黑體';
  font-size: 24px;
  color: #707070;
  font-weight: bold;
  display: grid;
  grid-row: decr3-start / decr3-end;
  grid-column: 3 / 4;
  align-self: center;
  justify-self: center;
  text-align: center;
}
</style>
