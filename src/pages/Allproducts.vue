<template>
<div class="d-flex flex-column sticky-footer-wrapper bg">
    <main class="flex-fill">
      <app-header></app-header>
      <div class="container mt-3">
          <div class="row">
            <div class="col-md-12">
              <Store />
            </div>
          </div>
      </div>
    </main>
    <Footer />
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from '../components/Nav.vue';
  import Store from "../components/Store";
  import Footer from "../components/Footer";
  export default {
    components: {
      appHeader: Header,
      Store,
      Footer
    },
    methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
  }
</script>

<style>
  .bg{
    background-color: #FFD9C4;
  }
  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  footer {
    height: 40px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {
    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
  }
</style>
