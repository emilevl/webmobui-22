<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import  {computed, ref, watchEffect} from 'vue';

  const originalKelvin = ref(0);

  const kelvin = computed({
      get: () => Math.round(originalKelvin.value * 100) / 100,
      set: (value) => originalKelvin.value = Math.round(value * 100) / 100
  });

  const celsius = computed({
      get: () => Math.round((originalKelvin.value - 273.15) * 100) / 100,
      set: (value) => {
          originalKelvin.value =  Math.round((value + 273.15) * 100) / 100
      },
  })

  const fahrenheit = computed({
      get: () => Math.round((originalKelvin.value * 1.8 - 459.67) * 100) / 100,
      set: (value) => {
          originalKelvin.value =  Math.round((value + 459.67) / 1.8 * 100) / 100;
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
  <h1>Températures</h1>
  <!-- INPUT VERSION LONGUE -->
  <label for="fahrenheit">Fahrenheit:</label>
  <input type="number" :value="fahrenheit" @input="evt => fahrenheit = (evt.target.value) - 0" id="fahrenheit">
  <br>
  <br>
  <!-- INPUT VERSION RACCOURCIE (fait le même taff) -->
  <label for="celsius">Celsius:</label>
  <input type="number" v-model.number="celsius" id="celsius">
  <br>
  <br>
  <label for="kelvin">Kelvin:</label>
  <input type="number" v-model.number="kelvin" id="kelvin">
</template>

<style>
</style>
