<template>
  <div class="container-grid">
    <Nav/>
    <p>us</p>
    <Section />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

import Nav from "../components/Nav";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default {
  name: "Conectus",
  components: {
    Nav,
    Section,
    Footer
  },
//   computed: mapGetters(['totalNews', 'selectedNews']),
//   methods: mapActions(['init']),
//   created() {
//     this.init();
//   }
};
</script>

<style lang="postcss">
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
</style>