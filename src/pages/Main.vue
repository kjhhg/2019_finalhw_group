<template>
  <div class="container-grid">
    <app-header></app-header>
    <Gallery />
    <Section />
    <Aboutus />
    <Groupmember />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Header from '../components/Nav.vue';
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import Aboutus from "../components/Aboutus";
import Groupmember from "../components/Groupmember";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    appHeader: Header,
    Gallery,
    Section,
    Aboutus,
    Groupmember,
    Footer
  },
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

