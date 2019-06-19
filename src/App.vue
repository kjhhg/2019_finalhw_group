<template>
  <div>
    <message-component></message-component>
    <router-view></router-view>
  </div>
</template>

<script>
import MessageComponent from './components/common/MessageComponent.vue';
export default {
  components: {
      MessageComponent
  },
  name: 'App'
};
</script>
