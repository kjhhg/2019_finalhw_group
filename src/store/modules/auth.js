import { firebaseAuth } from '../../config/firebaseConfig';
import router from "../../router";
import firebase from 'firebase';
const state = {
	isLoggedIn: firebaseAuth().currentUser != null,
	user: firebaseAuth().currentUser,
	errors: [],
    loading: false

}

const mutations = {
	'AUTH_STATUS_CHANGE' (state) {
		state.isLoggedIn = firebaseAuth().currentUser != null;
		state.user = firebaseAuth().currentUser;
	}
}

const actions = {
	async loginWithGoogle() {
		// loading set to true
		state.loading = true;
		// clear old errors
		state.errors = [];
		try {
		  let response = await firebase
			.auth()
			.signInWithPopup(new firebase.auth.GoogleAuthProvider());
		  state.user = response.user;
		  router.push("/");
		} catch (error) {
		  state.errors.push(error.message);
		  // set loading to false
		  state.loading = false;
		}
	  }
}

const getters = {
	isLoggedIn: (state) => {
		return state.isLoggedIn;
	},
	currentUser: (state) => {
		if (state && state.user) {
			return {
				email: state.user.email,
				emailVerified: state.user.emailVerified,
				uid: state.user.uid
			}
		} else {
			return {};
		}
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
