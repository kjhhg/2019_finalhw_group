import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Notice from '../pages/Notice.vue';
import Contactus from '../pages/Contactus.vue';
import Allproducts from '../pages/Allproducts.vue';


Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', component: Main, name: 'mainpage'},
    { path: '/product/:id', component: ProductDetails, name: 'product'},
    { path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
    { path: '/login', component: Login, name: 'login', onlyGuest: true },
    { path: '/register', component: Register, name: 'register', onlyGuest: true},
    { path: '/notice', component: Notice, name: 'notice'},
    { path: '/contactus', component: Contactus, name: 'contactus'},
    { path: '/allproducts', component: Allproducts, name: 'allproduct'}
  ]
});
