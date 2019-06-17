<template>
  <section class="section">
     
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Section",
  components: {
    
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
