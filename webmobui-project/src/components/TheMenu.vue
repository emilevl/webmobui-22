<script setup>
  import { computed } from "@vue/runtime-core";
  import {ref} from 'vue';
  import  {page} from '../state.js';


  window.addEventListener('hashchange', () =>{
    page.value = window.location.hash;
  })

  page.value = window.location.hash || '#home';
</script>

<template>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#temperature">Température</a></li>
            <li><a href="#money">Argent</a></li>
            <li><a href="#litres">Litres</a></li>
        </ul>
    </nav>
    
</template>

<style scoped>
  li {
    display: inline-block;
    margin: 0 1rem;
  }
  ul {
    margin: auto;
  }
</style>