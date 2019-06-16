import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../pages/Main";
//import Login from "../pages/Login";
import News16 from "../pages/News16";
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Notice from '../pages/Notice.vue';
import Contactus from '../pages/Contactus.vue';
import Allproducts from '../pages/Allproducts.vue';


Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', component: Main, name: 'mainpage'},
    { path: '/login', component: Login, name: 'login', onlyGuest: true },
    { path: '/register', component: Register, name: 'register', onlyGuest: true},
    { path: "/news/:id", component: News16, props: true },
    { path: '/notice', component: Notice, name: 'notice'},
    { path: '/contactus', component: Contactus, name: 'contactus'},
    { path: '/allproducts', component: Allproducts, name: 'allproduct'}
  ]
});
