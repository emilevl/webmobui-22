import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

import  {computed, ref, watchEffect} from 'vue';



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