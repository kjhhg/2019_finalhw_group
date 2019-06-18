<template>
<div class="product">
    <h2 class="grey-text">本周主打商品</h2>
    <Store1 />    
    <!-- <div class="news-card">
        <img 
        class="image" 
        src="https://i.imgur.com/24sQ40A.png"
        />
        <div class="news-text">
        <h2 class="title">草莓馬卡龍/2入</h2>
        <p class="description">
        新鮮草莓製作，無添加任何香料成份。
        </p>
        </div>
    </div> -->
</div>
  
</template>

<script>
import Store1 from "./Store1.vue";
export default {
  components: {
      Store1
  },
  name: "mainPageStore"
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";

.product{
    display: grid;
    grid-row: product-start / product-end;
    grid-column: center-start / center-end;
    text-align: center;
    font-family: '微軟正黑體';

    grid-template-rows: 
    [section-start]
    min-content
    [title-start]
    min-content
    [title-end product-start]
    min-content
    [product-end]
    min-content
    [section-end]
    ;
    /* grid-template-columns:
    [product-start]
    min-content
    [product-end]; */
    grid-gap: 100px;
}
.product h2{
    display: grid;
    
}

.news-card {
  position: relative;
  /* width: 300px; */
  height: auto;
  border-radius: 4px;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.news-card:hover {
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.50);
}

.news-card .image {
  max-width: 100%;
  height: auto;
  opacity: 0.8;
}

.news-card .news-text {
  padding: 5px 10px;
}

.news-card .title {
  color: #505050;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
}

.news-card .description {
  color: #595959;
  font-size: 16px;
  margin-bottom: 10px;
}

.news-card .topic {
  position: absolute;
  background: #FF8A65;
  font-size: 12px;
  color: #fff;
  padding: 4px 10px;
  font-weight: bold;
  top: 0;
  right: 0;
}

.grey-text {
    color: #707070;
}
</style>
