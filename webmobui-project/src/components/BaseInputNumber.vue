<script setup>
  import { computed } from "@vue/runtime-core";
//   import { round } from '../utils/math.js';
  const props = defineProps({
    modelValue: {
      type: [String, Number],
      required: true,
    },
    decimalPlaces: {
      type: Number,
      required: false,
      default: 2
    },
    unit: {
      type: String,
      required: false,
      default: ''
    }
  });
  const emit = defineEmits([
    'update:modelValue'
  ]);
  const value = computed({
    get: () => Math.round(props.modelValue, props.decimalPlaces),
    set: val => {
      if (isNaN(val) || val === '') return;
      emit('update:modelValue', val);
    }
  });
</script>

<template>
    <!-- v-bind="$attrs": Les attributs fournis dans le fichier principal (App.vue) seront attribués à l'input uniquement -->
  <input
    v-bind="$attrs"
    type="number"
    v-model="value"
  >
  <span v-show="unit">
    {{ unit }}
  </span>
</template>

<style scoped>
  input {
    display: inline-block;
    font-size: 1rem;
    border: solid black 1px;
    padding: 0 0.5rem;
  }
  span {
    display: inline-block;
    border: solid black 1px;
    background-color: #ddd;
    padding: 0 0.4rem;
    min-width: 2rem;
    text-align: center;
    border-width: 1px 1px 1px 0;
  }
</style>