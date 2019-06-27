<template>
<div class="container bg">
  <div class="col-md-12">
    <div v-if="isProductLoading" class="text-center">
      <div class="spinner-border text-light" style="width: 4rem; height: 4rem" role="status">
          <span class="sr-only">Loading...</span>
        </div>
    </div>
    <div v-else class="card">
      <div class="row">
        <div class="col-12 col-md-4 offset-md-4">
          <div class="intrinsic">
            <img class="img-fluid intrinsic-item" :src="item.thumbnail_url" alt="">
          </div>
        </div>
      </div>

      <div class="caption-full grey-text">
        <h4 class="pull-right">$ {{ item.price }}</h4>
        <h4> {{ item.title }}</h4>
        <p> {{ item.description }} </p>
      </div>
      <div class="ratings">
        <p class="pull-right">
          <button @click="addItem" :disabled="item.quantity === 0" class="btn lg-color">
                    加入購物車
          </button>
        </p>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex';

export default {
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px",
    }
  },
  computed: {
    ...mapGetters(['isProductLoading', 'products']),
    item() {
      let id = this.$route.params.id;
      if (this.products.length >= id) {
        let filterArr = this.products.filter((item) => {
          return item.id == id
        });
        if (filterArr.length > 0) {
          return filterArr[0];
        }
      }
      return {};
    }
  },
  methods: {
    ...mapActions(['updateCart']),
    addItem() {
      const order = {
        item: Object.assign({}, this.item),
        quantity: 1,
        isAdd: true
      };
      // console.log(order);
      this.updateCart(order);
    }
  }
}
</script>

<style scoped>
.caption-full {
  padding-right: 10px;
  padding-left: 10px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
  font-family: '微軟正黑體';
}
.grey-text {
  color: #707070;
  font-family: '微軟正黑體';
  font-weight:bold;
}
.card {
margin-top:7em;
background-color:#FFD9C4;
}
.lg-color{
  text-align: center;
}
</style>
