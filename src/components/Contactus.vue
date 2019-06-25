<template>
    <section class="section">
      <form action="https://script.google.com/macros/s/AKfycbxIM_PFKOvt1EWGwbdnTXof-9-lfpVX5bPfr4md/exec" method="POST">
          <h2 class="title">歡迎聯絡</h2>
          <div class="nameclass" >姓名：<input class="bordercls" type="text" name="userName" cols="50" required><br></div> 
          <div class="quetitle">
            提問：
          </div>
          <div class="quebox">
            <textarea class="bordercls" name="contentTxt" rows="10" cols="40" required></textarea><br>
            <input type="hidden" name="method" value="write">
            <input type="hidden" name="sheetUrl" value="https://docs.google.com/spreadsheets/d/1I9x5pAg-n5wsNZ4kLNT9H4pjV3qx4jR-MCriKOq8JO0/edit?usp=sharing">
            <input type="hidden" name="sheetTag" value="工作表1"><br>          
          </div>
          <input class="btn sub" type="submit" value="送出">
      </form>
    </section>
</template>

<script>
import { mapActions } from 'vuex';
// import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
// import Comtactus from "../components/Contactus";
import Footer from "../components/Footer";

export default {
  name: "Contactus",
  // components: {
  //   Nav,
  //   // Comtactus,
  //   Footer
  // },
  // computed: mapGetters(['totalNews', 'selectedNews']),
  methods: mapActions(['init']),
  created() {
    this.init();
  }
};
</script>

<style lang="postcss">
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";


input{
  outline-color: invert ;
	outline-style: none ;
	outline-width: 0px ;
	border: none ;
	border-style: none ;
	text-shadow: none ;
	/* -webkit-appearance: none ;
	-webkit-user-select: text ; */
	outline-color: transparent ;
	box-shadow: none;
}

.section{
  display: grid;
  grid-row: gallery-start / footer-strat;
  grid-column: full-start / full-end;
  grid-template-rows: 
  [cu-start]
  min-content
  [cu-end];
  grid-template-columns: 
  [cufull-start]
  minmax(2rem, 1fr)
  [center-start] 
  repeat(4, minmax(2rem, 1fr)) 
  [center-end] 
  minmax(2rem, 1fr)
  [cufull-end];

  /* background-color: $color-pink; */
  font-family: '微軟正黑體';
  font-size: 26px;
  color: #707070;
  font-weight: bold;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-items: center;


}
.section form{
  display: grid;
  grid-row: 1 /-1;
  grid-column: 2 / -2;

  grid-template-rows: 
  [section-start]
  200px
  [title-start]
  min-content
  [title-end gap-start] 
  50px
  [gap-end name-start]
  min-content
  [name-end quetitle-start]
  min-content
  [quetitle-end quebox-start]
  min-content
  [quebox-end submit-start]
  min-content
  [submit-end]
  200px
  [section-end];

  grid-template-columns: 
  [infull-start]
  minmax(2rem, 1fr)
  [incenter-start] 
  repeat(4, minmax(2rem, 1fr)) 
  [incenter-end] 
  minmax(2rem, 1fr)
  [incufull-end];
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
}
.title{
  grid-row: title-start / title-end;
  grid-column: incenter-start / incenter-end;
  text-align: center;
  font-weight: bold;
  position: relative;
  
  /* font-size: 30px; */
}
.title::before {
    border-top: 3px solid#707070;;
    content: "";
    display: block;
    height: 1px;
    left: 110%;
    position: absolute;
    top: 50%;
    width: 110%;
    height: 4px;
    z-index: 0;
}
.title::after {
    border-top: 3px solid #707070;;
    content: "";
    display: block;
    height: 1px;
    right: 110%;
    position: absolute;
    top: 50%;
    width: 110%;
    height: 4px;
    z-index: 0;
}

.nameclass{
  grid-row: name-start / name-end; 
  grid-column: incenter-start / incenter-end;
  justify-self: flex-start;
}
.quetitle{
  grid-row: quetitle-start / quetitle-end;
  grid-column: incenter-start / incenter-end;
  justify-self: flex-start;
}
.quebox{
  grid-row: quebox-start /quebox-end;
  grid-column: incenter-start / incenter-end;
}
.sub{
  grid-row: submit-start / submit-end;
  grid-column: incenter-start / incenter-end;
  color: white;
  width: 10rem;
}
.bordercls{
  border-radius: 8px;
  border-color: white;

}
</style>