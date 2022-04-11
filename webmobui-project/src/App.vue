<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import  {computed, ref, watchEffect} from 'vue';
  import TheMenu from './components/TheMenu.vue';
  import TheTemperatureConverter from './components/TheTemperatureConverter.vue';
  import TheMoneyConverter from './components/TheMoneyConverter.vue';

</script>

<template>
    <the-menu></the-menu>
    <the-temperature-converter v-if="isHidden"></the-temperature-converter>
    <the-money-converter></the-money-converter>
</template>

<style>
</style>
