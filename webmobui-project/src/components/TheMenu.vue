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
  function toggleSection(section) {
        // Supprime/Ajoute la classe active sur la section
        document.querySelector('template.active')?.classList.remove('active')
        document.querySelector(`${section}-section`)?.classList.add('active')
    }

    // Affichage d'une section
    function displaySection() {
        // S'il n'y a pas de hash (par ex, on est sur "localhost:8080/"), le défaut devient '#home'
        const section = window.location.hash || '#home'
        const sectionSplit = section.split('-')

        // Toggle par défaut des sections et de la navigation
        toggleSection(sectionSplit[0])
        // toggleNav(sectionSplit[0])
    }


</script>

<template>
    <nav>
        <ul>
            <li><a href="#temperature" @click="evt=> displaySection(evt)">Température</a></li>
            <li><a href="#money">Argent</a></li>
            <li><a href="#litres">Litres</a></li>
        </ul>
    </nav>
    
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