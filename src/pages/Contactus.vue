<template>
  <div class="container-grid">
    <Nav/>
    <Contactus />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    Nav,
    Contactus,
    Footer
  },
  computed: mapGetters(['totalNews', 'selectedNews']),
  methods: mapActions(['init']),
  created() {
    this.init();
  }
};
</script>

<style lang="postcss">
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
</style>