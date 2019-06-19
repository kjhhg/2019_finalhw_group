<template>
<div class="container" :class="{loadingItem: isProductLoading}">
  <div class="row text-center" v-if="isProductLoading">
      <div class="spinner-border text-light" style="width: 4rem; height: 4rem" role="status">
        <span class="sr-only">Loading...</span>
      </div>
  </div>
  <div v-else class="row action-panel">
    <div class="col-12">
      <div class="btn-group btn-group-sm pull-right">
				<button id="list" class="btn lg-color" @click.prevent="changeDisplay(true)">
          <i class="fa fa-list" aria-hidden="true"></i> List
				</button>
				<button id="grid" class="btn lg-color" @click.prevent="changeDisplay(false)">
          <i class="fa fa-th" aria-hidden="true"></i> Grid
				</button>
      </div>
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
import GridLoader from 'vue-spinner/src/GridLoader.vue';

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
    appProductItem: ProductItem,
    GridLoader
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


</style>
