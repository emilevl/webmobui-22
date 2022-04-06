import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import  {computed, ref, watchEffect} from 'vue';

// const originalKelvin = ref(0);

// const kelvin = computed({
//     get: () => originalKelvin.value,
//     set: (value) => originalKelvin.value = value
// });

// const celsius = computed({
//     get: () => originalKelvin.value - 273.15,
//     set: (value) => {
//         originalKelvin.value =  value + 273.15
//     },
// })

// const fahrenheit = computed({
//     get: () => Math.round(originalKelvin.value * 1.8 - 459.67),
//     set: (value) => {
//         originalKelvin.value =  Math.round((value + 459.67) / 1.8);
//     },
    
//     //  ANCIENNE VERSION return kelvin.value * 1.8 - 459.67;
// })


// watchEffect(() => {
//     console.log("---- CHANGEMENT ----")
//     console.log("kelvin: " + kelvin.value);
//     console.log("celsius: " + celsius.value);
//     console.log("fahrenheit: " + fahrenheit.value);
// });

// celsius.value = 30


// ________________ ENTRAINEMENT _______________________//
// Permet de créer des variables réactives (avec ref)
// const x = ref(1);
// // La donnée s'accède ensuite avec ".value";
// console.log(x.value);

// // Vue fait automatiquement la gestion --> y = x.value * 2;
// const y = computed(() => {
//     return x.value*2
// });

// // track tous les changements d'une valeur 
// watchEffect(() => console.log(y.value));

// x.value = 2;
// x.value = 18;