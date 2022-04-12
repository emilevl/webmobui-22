<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import  {computed, ref, watchEffect} from 'vue';
  import BaseInputNumber from './BaseInputNumber.vue';

  const originalDollars = ref(0);

//convert dollars to euros

  

  const dollars = computed({
      get: () => originalDollars.value,
      set: (value) => originalDollars.value = value
  });

  const euro = computed({
      get: () => originalDollars.value * 0.8,
      set: (value) => {
          originalDollars.value = (value / 0.8)
      },
  })


//convert dollars to swiss francs
  const chf = computed({
      get: () => originalDollars.value * 0.99,
      set: (value) => {
          originalDollars.value = value / 0.99
      },
  })

  //convert liters to gallons
  

</script>

<template>
  <h1>Convertisseur d'argent</h1>
  <base-input-number
  v-model="dollars"
  symbol="$"
  id="dollars"
  label="Dollars"
  />
  <br><br>
  <base-input-number
  v-model="chf"
  symbol="CHF"
  id="chf"
  label="CHF"
  />
  <br><br>
  <base-input-number
  v-model="euro"
  symbol="€"
  id="euro"
  label="Euro"
  />
  
  <!-- VERSION AVEC BOUTON PERSONNALISÉ (COMPOSANT) -->
</template>