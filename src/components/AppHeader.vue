<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  data(){
    return{
      store,
    }
  },

  methods: {


}
}
</script>


<template>

<header>
    <div>
        <input v-model="store.searchText" type="text" placeholder="Inserisci nome">

        <button @click="$emit('performSearch')">Cerca</button>
    </div>
  </header>

</template>



<style lang="scss" scoped>
@use "../assets/scss/header.scss" as *;

textarea{
    width: 15%
  }
</style>
