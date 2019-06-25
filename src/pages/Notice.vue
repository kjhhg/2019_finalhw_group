<template>
  <div class="container-grid">
    <Nav/>
    <div class="section">
      <h2 class="notice">購買須知</h2>
      <div class="main">
        蛋糕宅配服務<br>
        
        目前我們配合黑貓宅急便做蛋糕宅配運送，為了確保商品的新鮮及配送安全，全程都會使用低溫冷凍配送，因此如果蛋糕內容含有新鮮水果及無法冷凍的食材就不能選擇宅配喲！
        <br>
        <p></p>
        <p></p>
        訂購須知：<br>
        <p> </p>
        <p></p>
        ✱ 可指定到貨日：指定時間為週二至週六，為因應黑貓宅急便週日公休政策，所以週日及週一無法指定到貨<br>
        <p></p>
        ✱ 訂單送出後，請在3日內完成付款，付款完成才開始安排訂單製作<br>
        <p></p>
        ✱ 所有商品皆為新鮮製作，所以我們最快出貨日為下單後3個工作天，如有急單需求請務必來電確認，夥伴們會跟您確認更改收貨日期的事宜<br>
        <p></p>
        ✱ 如訂單送出後有需要修改到貨日期，請電洽店面或私訊粉絲團做修改<br>
        <p></p>
        ✱ 宅配商品我們皆進行了多次的配送實驗，也有最完全保護的包裝，但是配送過程還是有一定的風險，下單前請三思，可能會因配送而有碰撞的狀態，風險須自行承擔，除非為嚴重變形及耗損，黑貓宅配才會視狀況做賠償，可以接受者再下單喲<br>
      </div>
      <div class="pay pay-title1">
        蛋糕宅配可以選擇時段嗎？
      </div>
      <div class="ans ans1">
        
        配合黑貓宅配的到貨方案，宅配時段可選13:00前及13:00-18:00兩個時段，無法指定確切的時間到貨，如有需要指定時段，請直接在訂單備註欄做備註，如沒有特殊需求，建議指定「13點前」收件，避免延誤您的等候時間，也會減短商品在物流運送的時間、大幅降低商品受損的風險。另外請注意周日及週一無法指定到貨，請留意選擇到貨時間
        <br><p></p>
        如有特殊到貨需求，可至粉絲專頁私訊或是電話告知，我們會做即時的資訊回覆。

      </div>
      <div class="pay pay-title2">
        母親節蛋糕什麼時候開放宅配預約？
      </div>
      <div class="ans ans2">
        2019母親節蛋糕開放訂購時間為4/?~5/?，蛋糕宅配可到貨時間為5/?~5/?，請直接到以下連結線上訂購
      </div>
      <div class="pay pay-title3">
        如果宅配過程中蛋糕撞傷了，怎麼辦？能補一個新的嗎？
      </div>
      <div class="ans ans3">
        1. 蛋糕宅配有一定風險，車體運送途中可能造成蛋糕左右位移3~5cm。蛋糕位移、側邊損傷或裝飾掉落、微損，均不在毀壞補償範圍內，風險須自行承擔。<br>
        2. 本商品為食品，收件後請立即打開檢視蛋糕狀態。<br>
        3. 蛋糕如嚴重受損 ( 蛋糕糊爛、不成型、難以辨別蛋糕原本的樣子)，請在第一時間內拍照存證 ( 需拍攝蛋糕在蛋糕盒內的樣子)，並請於「當天」電話 02-29602487或私訊粉絲專頁聯絡我們喔！<br>
        4. 如很明顯是運送的人為疏失，我們會在第一時間與配送公司聯繫處理，在還未處理完成前，請不要丟掉或吃掉蛋糕，請保留收件時的狀態，避免與黑貓造成糾紛。<br>
        5.我們會盡最大的心力去包裝並防止碰撞，但宅配一定有風險，下單前請務必閱讀以上注意事項。
 

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default {
  name: "Notice",
  components: {
    Nav,
    Footer
  },
};
</script>

<style lang="postcss">
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";

.section {
  background-color:#FFD9C4;
  display: grid;
  grid-row: nav-start / group-end;
  grid-column: full-start / full-end;
  
  grid-template-rows:
  [section-start]
  30px
  [title-start]
  minmax(8rem,1fr)
  [title-end main-start] 
  min-content
  [main-end div-start] 
  repeat(6, min-content)
  [div-end]
  50px
  [section-end];

  grid-template-columns:
  [full-start] 
  minmax(2rem, 1fr)
  [center-start] 
  repeat(3, minmax(2rem, 1fr)) 
  [center-end] 
  minmax(2rem, 1fr) 
  [full-end];

  grid-gap: 50px;
  grid-column-gap: 50px; 
}

.notice{
  font-family: '微軟正黑體';
  /* font-size: 30px; */
  font-weight: bold;
  color: #707070;
  display: grid;
  grid-row: title-start / title-end;
  grid-column: center-start / center-end;
  align-self: flex-end;
  justify-self: center;
  position: relative;
}
.main{
  font-family: '微軟正黑體';
  font-size: 24px;
  color: #707070;
  font-weight: bold;
  display: grid;
  grid-row: main-start / main-end;
  grid-column: center-start / center-end;
  align-self: center;
  justify-self: center;
  text-align: flex-start;
}

.pay{
  font-family: '微軟正黑體';
  font-size: 24px;
  color: $color-white;
  background-color: #FE9287;
  padding: 20px 40px;
  border-radius: 50px;
  font-weight: bold;
  display: grid;

  align-self: flex-start;
  justify-self: flex-start;
  text-align: center;
  &-title1{
    grid-row: div-start /  5 ;
    grid-column: center-start /  center-end ;
  }
  &-title2{
    grid-row: 6 /  7 ;
    grid-column: center-start /  center-end ;
  }
  &-title3{
    grid-row: 8 /  9 ;
    grid-column: center-start /  center-end ;
    
  }
}
.notice::before {
    border-top: 3px solid#707070;;
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
.notice::after {
    border-top: 3px solid #707070;;
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
  .notice::before {
    border-top: 3px solid#707070;;
    content: "";
    display: block;
    height: 1px;
    left: 20%;
    position: absolute;
    top: 26%;
    width: 20%;
    height: 4px;
    z-index: 0;
  }
  .notice::after {
      border-top: 3px solid #707070;;
      content: "";
      display: block;
      height: 1px;
      right: 20%;
      position: absolute;
      top: 26%;
      width: 20%;
      height: 4px;
      z-index: 0;
  }
}
.ans{
  font-family: '微軟正黑體';
  font-size: 20px;
  color: #707070;
  font-weight: bold;
  display: grid;
  text-align: flex-start;
  &1{
    grid-row: 5 /  6 ;
    grid-column: center-start /  center-end ;
  }
  &2{
    grid-row: 7 /  8 ;
    grid-column: center-start /  center-end ;
  }
  &3{
    grid-row: 9 /  10 ;
    grid-column: center-start /  center-end ;
    
  }
}
</style>