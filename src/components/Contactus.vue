<template>
  <section class="section">
    <form action="https://script.google.com/macros/s/AKfycbxIM_PFKOvt1EWGwbdnTXof-9-lfpVX5bPfr4md/exec" method="POST">
        <div class="nameclass" >姓名：<input type="text" name="userName" required><br></div> 
        <div class="quetitle">
          提問：
        </div>
        <div class="quebox">
          <textarea name="contentTxt" rows="10" cols="30" required></textarea><br>
          <input type="hidden" name="method" value="write">
          <input type="hidden" name="sheetUrl" value="https://docs.google.com/spreadsheets/d/1I9x5pAg-n5wsNZ4kLNT9H4pjV3qx4jR-MCriKOq8JO0/edit?usp=sharing">
          <input type="hidden" name="sheetTag" value="工作表1"><br>          
        </div>
        <input class="sub" type="submit" value="送出">
    </form>
  </section>
</template>

<script>
export default {
  name: "Contactus"
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";

.section{
  display: grid;
  grid-row: contactus-start / contactus-end;
  grid-column: full-start /full-end;

  grid-template-rows: 
  [cu-start]
  min-content
  [cu-end];
  grid-template-columns: 
  [cufull-start]
  min-content
  [cufull-end];
  background-color: $color-pink;
  align-items: center;
  justify-content: center;
}
.section form{
  display: grid;
  grid-row: cu-start / cu-end;
  grid-column: cufull-start / cufull-end;

  grid-template-rows: 
  [section-start]
  100px
  [name-start]
  min-content
  [name-end quetitle-start]
  min-content
  [quetitle-end quebox-start]
  min-content
  [quebox-end submit-start]
  min-content
  [submit-end]
  100px
  [section-end];

  grid-template-columns: 
  [in-full]
  2rem
  [incenter-start]
  min-content
  [incenter-end]
  2rem
  [in-full];
  align-items: center;
  justify-content: center;
}
.nameclass{
  grid-row: name-start / name-end; 
  grid-column: incenter-start / incenter-end;
}
.quetitle{
  grid-row: quetitle-start / quetitle-end;
  grid-column: incenter-start / incenter-end;
}
.quebox{
  grid-row: quebox-start /quebox-end;
  grid-column: incenter-start / incenter-end;
}
.sub{
  grid-row: submit-start / submit-end;
  grid-column: incenter-start / incenter-end;
}
</style>