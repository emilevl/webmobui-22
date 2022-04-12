<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import  {computed, ref, watchEffect} from 'vue';
  import TheMenu from './components/TheMenu.vue';
  import TheTemperatureConverter from './components/TheTemperatureConverter.vue';
  import TheMoneyConverter from './components/TheMoneyConverter.vue';
  import  {page} from './state.js';


</script>

<template>
    <the-menu></the-menu>
    <h1 v-show="page === '#home'">Welcome to the converters Web app</h1>
    <div  v-show="page === '#temperature'">
      <the-temperature-converter/>
    </div>
    <div  v-show="page === '#money'">
      <the-money-converter/>
    </div>
    <!-- <the-money-converter v-show="page === '#money'"></the-money-converter> -->
</template>

<style>
</style>
