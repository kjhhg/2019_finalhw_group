<template>
  <div class="container" :class="{loadingItem: isProductLoading}">
     <div class="row text-center" v-if="isProductLoading">
        <div class="spinner-border text-light" style="width: 4rem; height: 4rem" role="status">
          <span class="sr-only">Loading...</span>
        </div>
  </div>
  <div class="row" v-if="!isProductLoading">
    <app-product-item v-for="prod in products" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './product/ProductItem.vue';

export default {
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px",
      displayList: false
    }
  },
  computed: {
    ...mapGetters(['products', 'isProductLoading']),
  },
  components: {
    appProductItem: ProductItem
  },
  methods: {
    changeDisplay(isList) {
      this.displayList = isList;
    }
  }
}
</script>

<style>
/* .container{
  display: grid;
  grid-rows: product-start /  product-end;
  grid-column: section-start / section-end; 
} */
.loadingItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}

.lg-color {
  color: #fff;
}
.container{
    color: #707070;
    grid-row: productrowt-start / productrow-end;
    grid-column: productcol-start / productcol-end;
    width: 100%;
    
}

</style>
