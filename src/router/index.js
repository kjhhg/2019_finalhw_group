import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase";

import Main from "../pages/Main";
import Login from "../pages/Login";
import News16 from "../pages/News16";
// import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import { notStrictEqual } from "assert";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Main,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/news/:id",
      component: News16,
      props: true,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
          next("/login");
        } else {
          next();
        }
      }
    },
    {
      path: "/conectus",
      // component: Conectus,
      // beforeEnter: (to, from, next) => {
      //   if (!firebase.auth().currentUser) {
      //     next("/login");
      //   } else {
      //     next();
      //   }
      // }
    }
  ]
});
