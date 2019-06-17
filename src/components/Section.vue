<template>
  <section class="section">
     
  </section>
</template>

<script>
import NewsList from './NewsList';
import { mapGetters } from 'vuex';

export default {
  name: "Section",
  components: {
    NewsList
  },
  computed: mapGetters([
      "socialNews", 
      "entertainmentNews", 
      "sportNews", 
      "taiwanNews"
  ])
};
</script>

<style lang="postcss" scoped>
@import "../styles/base/_variables.css";
@import "../styles/base/_global.css";
@import "../styles/modules/_section.css";
</style>
