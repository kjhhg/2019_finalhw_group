import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import router from './router';
import { firebaseListener } from './config/firebaseConfig';

Vue.use(VueRouter);

firebaseListener(authStatusChange);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

function authStatusChange(loggedIn, user) {
	if (store) {
		store.commit('AUTH_STATUS_CHANGE');
		if (user) {
			store.dispatch('getShoppingCart', {uid: user.uid, currentCart: store.getters.cartItemList});
		}
	}

}