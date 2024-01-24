<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
  data(){
    return{
      store,
    }
  },

  methods: {}
}
</script>



<template>
  <header>
    <div>
      <form action="">
        <input type="text" placeholder="Inserisci nome">

        <button type="submit" class="btn btn-primary ms-3">Cerca</button>
      </form>
    </div>


    <div>
      <ul v-for="(film, i) in store.films">
        <li>{{film.title}}</li>

        <li>{{film.original_title }}</li>

        <li>{{film.original_language}}</li>

        <li>{{film.vote_average }}</li>
      </ul>
    </div>
</header>


</template>



<style lang="scss" scoped>
@use "../assets/scss/header.scss" as *;

textarea{
    width: 15%
  }
</style>
