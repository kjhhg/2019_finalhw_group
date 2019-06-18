<template>
<div class="container table-responsive bg">
  <app-header></app-header>
  <table id="cart" class="table-Danger table-hover table-sm no-border  grey-text"> 
    <thead>
      <tr>
        <th style="width:50%">產品</th>
        <th style="width:10%">價格</th>
        <th style="width:8%">剩餘數量</th>
        <th style="width:22%" class="text-center">小計</th>
        <th style="width:10%"></th>
      </tr>
    </thead>

    <transition-group name="list-shopping-cart" tag="tbody">
      <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>
    </transition-group>

    <tfoot>
      <tr class="d-table-row d-sm-none">
        <td class="text-center"><strong>總金額 ${{ cartValue }}</strong></td>
      </tr>
      <tr>
        <td>
          <button class="btn lg-color" @click="saveShoppingCartLocal">
							<i class="fa fa-angle-left"></i> 儲存並繼續購買
						</button>
        </td>
        <td colspan="2" class="d-none d-sm-table-cell"></td>
        <td class="d-none d-sm-table-cell text-center"><strong>總金額 ${{ cartValue }}</strong></td>
        <td class="px-0">
          <button class="btn lg-color" @click="checkout">
							<span class="text-nowrap">前往結帳 <i class="fa fa-angle-right d-inline"></i></span>
					</button>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex';
import Header from '../components/Nav.vue';
import CartItem from './cart/CartItem.vue';
export default {
  computed: {
    ...mapGetters(['cartItemList', 'isLoggedIn', 'products', 'currentUser', 'cartValue'])
  },
  components: {
    appCartItem: CartItem,
    appHeader: Header
  },
  methods: {
    ...mapActions(['saveShoppingCart', 'addMessage', 'saveToTransaction', 'clearCart']),
    checkValidCart(itemList, prodList) {
      let isValid = true;
      let message = "";

      itemList.map(item => {
        for (let prodIdx = 0; prodIdx < prodList.length; prodIdx++) {
          if (prodList[prodIdx].id == item.id) {
            if (prodList[prodIdx].quantity < item.quantity) {
              message = `Only ${prodList[prodIdx].quantity} ${item.title} available in stock`;
              isValid = false;
              return;
            }
            break;
          }
        }
      });
      return {
        isValid,
        message
      }
    },
    saveShoppingCartLocal() {
      if (this.isLoggedIn) {
        let {
          isValid,
          message
        } = this.checkValidCart(this.cartItemList, this.products);

        if (isValid) {
          this.saveShoppingCart({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid
          }).then(() => {
            this.addMessage({
              messageClass: 'success',
              message: '已成功儲存您的購物車'
            });
            this.$router.push('/');
          });
        } else {
          this.addMessage({
            messageClass: 'danger',
            message: message
          });
        }
      } else {
        this.addMessage({
          messageClass: 'warning',
          message: '請登入儲存您的購物車'
        });
      }
    },
    checkout() {
      if (this.isLoggedIn) {
        if (!this.cartItemList || this.cartItemList.length == 0) {
          this.addMessage({
            messageClass: 'warning',
            message: '您的購物車內沒有東西!'
          });
          return;
        }
        let {
          isValid,
          message
        } = this.checkValidCart(this.cartItemList, this.products);

        if (isValid) {
          this.saveToTransaction({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid
          }).then(() => {
            this.addMessage({
              messageClass: 'success',
              message: '購買成功'
            });
            this.saveShoppingCart({
              cartItemList: [],
              uid: this.currentUser.uid
            });
            this.clearCart();
            this.$router.push('/');
          });
        } else {
          this.addMessage({
            messageClass: 'danger',
            message: message
          });
        }
      } else {
        this.addMessage({
          messageClass: 'warning',
          message: '請先登入'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-shopping-cart-leave-active {
  transition: all 0.4s;
}

.list-shopping-cart-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.table-sm {
  font-size: 0.875rem;
}

.grey-text {
  color: #707070;
  font-family: '微軟正黑體';
}

td{
  border: 1px solid transparent !important;
}
</style>
