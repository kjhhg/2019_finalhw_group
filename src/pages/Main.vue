<template>
  <div class="container-grid">
    <app-header></app-header>
    <Gallery />
    <mainPageProduct />
    <div class="sp"></div>
    <Aboutus />
    <Groupmember />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Header from '../components/Nav.vue';
import mainPageProduct from '../components/mainPageStore';
import Gallery from "../components/Gallery";
import Aboutus from "../components/Aboutus";
import Groupmember from "../components/Groupmember";
import Footer from "../components/Footer";

export default {
  name: "Main",
  components: {
    appHeader: Header,
    mainPageProduct,
    Gallery,
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

.sp{
  grid-row: section-start / section-end;
  grid-column: center-start / center-end;
  height:10em;
}
</style>

