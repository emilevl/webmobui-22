<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'
  import  {computed, ref, watchEffect} from 'vue';
  import BaseInputNumber from './BaseInputNumber.vue';

  //fetch data from an api endpoint https://api.com
    const data = {}
    const fetchData = async () => {
        const response = await fetch('https://chabloz.eu/files/horaires/students.json');
        const json = await response.json();
        data.value = json;
        // const user = [];
        // user['firstname'] = data.value[0].name.split(' ')[1];
        // user['lastname'] = data.value[0].name.split(' ')[0];
        // user['promotion'] = data.value[0].promotion;
        // console.log(data.value.find(user => user.email == 'emile.vianney-liaud@heig-vd.ch'));
    }
    fetchData();
   
//    const promotions = {'M48': [1, 2, 3], 'M49': [1, 2], 'M50': [1, 2]};
    const promotions = {1: 'M48', 2: 'M49', 3: 'M50'};
   const groups = {
        1: 1,
        1: 2,
        1: 3,
        2: 1,
        2: 2,
        2: 3,
        3: 1,
        3: 2,
   }
const firstName = ref(null);
const lastName = ref(null);
const promotion = ref(null);
const email = ref('')
const user = computed({
            firstName: firstName, 
            lastName: lastName,
            email: email, 
            promotion: promotion
    });


//   const firstname = computed({
//       get: () => this._value,
//       set: (value) => this._value = value
//   });

//   const lastname = computed({
//       get: () => user.value.lastname,
//       set: (value) => {
//           this._value = value;
//       },
//   })


const regex = /^[\w\-\.]+@heig-vd.ch$/i;

watchEffect(() => {
    if (email.value.match(regex)) {
        fillUserName();
    }
    // console.log(email.value);
})
function fillUserName() {
        let newUser = data.value.find(usr => usr.email == email.value)
        
        if (newUser) {
            console.log('email is valid');
            firstName.value = newUser.name.split(' ')[1];
            lastName.value = newUser.name.split(' ')[0];
            console.log(lastName.value)
            // promotion.value = newUser.promotion;
            // firstname.value = data.value.find(user => user.email === value).name.split(' ')[1];
            // lastname.value = data.value.find(user => user.email === value).name.split(' ')[0];
            // email.value = value;
        }else {
            console.log('email is not valid');
        }
        
}
  

</script>

<template>
    <h1>Connexion</h1>
    <!-- <base-input-number
    v-model="dollars"
    symbol="$"
    id="dollars"
    label="Dollars"
    /> -->
    <br><br>
    <input type="mail" placeholder="Votre email" v-model="email" />
    <br><br>
    <input type="text" placeholder="Votre nom" v-model="firstName" />
    <br><br>
    <input type="text" placeholder="Votre prénom" v-model="lastName" />
    <br><br>
    <select>
        <!-- <option v-for="group in groups" v-bind:value="group">{{group}}</option> -->
        <option value="1" >M48-1</option>
        <option value="2">M48-2</option>
        <option value="3">M49-1</option>
        <option value="4">M49-2</option>
        <option value="5">M49-3</option>
        <option value="6">M50</option>
        <option value="7">M51</option>
    </select>
  
</template>