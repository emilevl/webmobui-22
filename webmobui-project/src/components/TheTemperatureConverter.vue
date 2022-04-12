<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import  {computed, ref, watchEffect} from 'vue';
  import BaseInputNumber from './BaseInputNumber.vue';

  const originalKelvin = ref(0);

  const kelvin = computed({
      get: () => originalKelvin.value,
      set: (value) => originalKelvin.value = value
  });

  const celsius = computed({
      get: () => originalKelvin.value - 273.15,
      set: (value) => {
          originalKelvin.value = (value + 273.15)
      },
  })

  const fahrenheit = computed({
      get: () => originalKelvin.value * 1.8 - 459.67,
      set: (value) => {
          originalKelvin.value = (value + 459.67) / 1.8;
      },
  })
</script>

<template>
  <h1>Températures</h1>
  <base-input-number
  v-model="celsius"
  symbol="°C"
  id="celsius"
  label="Celsius"
  />
  <br>
  <br>
  <base-input-number
  v-model="kelvin"
  symbol="K"
  id="kelvin"
  label="Kelvin"
  />
  <br>
  <br>
  <base-input-number
  v-model="fahrenheit"
  symbol="F"
  id="fahrenheit"
  label="Fahrenheit"
  />
  <br>
</template>