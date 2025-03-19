<template>
  <div id="app">
    <h>132</h>
    <router-view></router-view>
    <floating-ball></floating-ball>
  </div>
</template>

<script>
import FloatingBall from './components/FloatingBall.vue';


export default {
  name: 'App',
  components: {
    FloatingBall
  }
}
</script>

<style></style>
