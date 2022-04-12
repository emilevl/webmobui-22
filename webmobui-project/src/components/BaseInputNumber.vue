<script setup>
  import { computed, ref } from 'vue';
  import { round } from '../utils/math.js';

  const props = defineProps({
    modelValue: {
      type: [String, Number],
      required: true
    },
    symbol: {
      type: String,
      required: false,
      default: ''
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: ''
    },
  })

  const emits = defineEmits([
    'update:modelValue',
    'itsOver9000'
  ]);
  
  // Etape intermédiaire
  const value = computed({
    get: () => round(props.modelValue, 2),
    set: val => {
      if ( val > 9000) emits('itsOver9000', val)
      if (isNaN(val) || val === "") return;
      emits('update:modelValue', round(val, 2))
    }
  })
</script>

<template>
    <!-- v-bind="$attrs": Les attributs fournis dans le fichier principal (App.vue) seront attribués à l'input uniquement -->
  <label :for="id" v-show="label">{{props.label}}</label>
  <input
    type="number"
    v-model="value"
    v-bind="$attrs"
    :id="id"
  >
  <!-- <input
    type="number"
    :value="modelValue"
    @input="modelValue = $event.target.value"
    > -->
  <span v-show="symbol">
    {{ symbol }}
  </span>
</template>

<style scoped>
  input {
    display: inline-block;
    font-size: 1rem;
    border: solid black 1px;
    padding: 0 0.5rem;
    margin: 0 0 0 1.5rem;
    border-radius: 5px 0px 0px 5px;
  }
  span {
    display: inline-block;
    border: solid black 1px;
    background-color: #ddd;
    padding: 0 0.4rem;
    min-width: 2rem;
    text-align: center;
    border-width: 1px 1px 1px 0;
    border-radius: 0px 5px 5px 0px;
  }
</style>