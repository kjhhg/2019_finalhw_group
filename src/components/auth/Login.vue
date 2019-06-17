<template>
  <div>
    <div class="jumbotron jumbotron-bg text-white text-center">
      <h2 class="display-3">
        <img src="../../img/sweet_time.png" alt="">
      </h2>
    </div>
    <div class="col-md-6 offset-md-3">
      <h2 class="login-header text-center mb-5 display-4">
        登入/註冊
      </h2>
      <!-- login with email and password -->
      <form>
        <div class="form-group">
          <input type="email" name="email" id="email" class="form-control" placeholder="Email Address" v-model="email">
          <br>
          <input type="password" name="password" id="password" class="form-control" placeholder="Password" v-model="password">
        </div>
      </form>
      <!-- social login -->
      <div class="text-center mt-4">
        <button @click.prevent="loginWithEmailLocal" :disabled="isLoading" class="btn btn-bg btn-lg btn-block">
          <i v-if="isLoading" class="fa fa-spinner fa-spin" />
          登入
        </button>
        <button @click.prevent="registerByEmailLocal" :disabled="isLoading" class="btn btn-bg btn-lg btn-block">
          <i v-if="isLoading" class="fa fa-spinner fa-spin" />
          註冊
        </button>
        <button @click="loginWithGoogle" class="btn btn-bg-g btn-lg btn-block">
          <img src="../../img/1024px-Google__G__Logo.svg.png" alt="">
          Google帳號登入
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['addMessage', 'clearMessage', 'loginWithEmail', 'registerByEmail','loginWithGoogle']),
    loginWithEmailLocal() {
      this.isLoading = true
      let data = {
        email: this.email,
        password: this.password
      }
      this.loginWithEmail(data).then(() => {
        this.clearMessage();
        this.$router.push({
          name: 'mainpage'
        });
      }).catch((error) => {
        let message_obj = {
          message: error.message,
          messageClass: "danger",
          autoClose: true
        }
        this.addMessage(message_obj);
      }).then(() => {
        this.isLoading = false
      })
    },
    registerByEmailLocal() {
        this.isLoading = true
        let data = {
          email: this.email,
          password: this.password
        }
        this.registerByEmail(data).then(() => {
          this.clearMessage();
          this.$router.push({name: 'mainpage'});
        })
        .catch((error) => {
          // console.log('register error', error);
          let message_obj = {
              message: error.message,
              messageClass: "danger",
              autoClose: true
            }
           this.addMessage(message_obj);
        }).then(() => {
          this.isLoading = false
        })
      }
  }
}
</script>
<style lang='postcss' scoped>
@import "../../styles/base/_variables.css";
* {
  border-radius: 0;
}

.jumbotron{
  height: 300px;
}
.jumbotron-bg {
  background-color: $color-pink;
}

.login-header {
  color: $color-primary-dark;
}

.form-control{
  border-radius: 5px;
}

.btn-bg {
  background-color: $color-pink;
  color: $color-white;
  border-radius: 5px;
}
.btn-bg-g {
  background-color: $color-white;
  color: $google-red;
  border: 1px solid $google-red;
  border-radius: 5px;
}

button img{
  width: 50px;
  height: 50px;
  margin-right: 5px;
}

h2 img{
  height: 150px;
  width: auto;
  margin-top: -50px;
}
</style>