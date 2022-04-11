<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import  {computed, ref, watchEffect} from 'vue';
  import BaseInputNumber from './BaseInputNumber.vue';

  const originalDollars = ref(0);

  const dollars = computed({
      get: () => Math.round(originalDollars.value * 100) / 100,
      set: (value) => originalDollars.value = value
  });

  const chf = computed({
      get: () => Math.round((originalDollars.value - 273.15) * 100) / 100,
      set: (value) => {
          originalDollars.value = (value + 273.15)
      },
  })

  const euro = computed({
      get: () => Math.round((originalDollars.value * 1.8 - 459.67) * 100) / 100,
      set: (value) => {
          originalDollars.value = (value + 459.67) / 1.8;
      },
      
      //  ANCIENNE VERSION return kelvin.value * 1.8 - 459.67;
  })


  // watchEffect(() => {
  //     console.log("---- CHANGEMENT ----")
  //     console.log("kelvin: " + kelvin.value);
  //     console.log("celsius: " + celsius.value);
  //     console.log("fahrenheit: " + fahrenheit.value);
  // });

  // celsius.value = 30

</script>

<template>
    <h1>Convertisseur d'argent</h1>
  <!-- INPUT VERSION LONGUE -->
  <label for="dollars">Dollars:</label>
  <input type="number" :value="dollars" @input="evt => dollars = (evt.target.value) - 0" id="dollars">
  <br>
  <br>
  <!-- INPUT VERSION RACCOURCIE (fait le même taff) -->
  <label for="chf">Francs Suisse:</label>
  <input type="number" v-model.number="chf" id="chf">
  <br>
  <br>
  <label for="euro">Euros:</label>
  <input type="number" v-model.number="euro" id="euro">
  
  <!-- VERSION AVEC BOUTON PERSONNALISÉ (COMPOSANT) -->
  <label>Euro</label>
  <base-input-number
    v-model="kelvin"
    :decimal-places="precision"
    unit="E"
    data-role="input"
  />
</template>