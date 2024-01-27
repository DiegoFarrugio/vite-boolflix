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

  <div class="container-header">
    <div class="text-danger fs-4">
      <strong>BOOLFLIX</strong>
    </div>
    <div>
      <input v-model="store.searchText" type="text" placeholder="Inserisci nome">

      <button @click="$emit('performSearch')" class="btn btn-danger">Cerca</button>
    </div>
  </div>

</header>

</template>



<style lang="scss" scoped>
@use "../assets/scss/header.scss" as *;

</style>
