<script>
import { store } from '../store.js';

export default {
  data(){
    return{
        store
    }
  },

  methods: {
    flagNations(lang){
      let finalLink = '';

      //Se lang è uguale a EN allora dentro la variabile finalLink me lo fai diventare GB.
      if(lang == 'en'){
        finalLink = 'https://flagicons.lipis.dev/flags/4x3/gb.svg';
      }

      else if(lang == 'ja'){
        finalLink = 'https://flagicons.lipis.dev/flags/4x3/jp.svg';
      }

      else if(lang == 'zh'){
        finalLink = 'https://flagicons.lipis.dev/flags/4x3/cn.svg';
      }

      else{
        finalLink = 'https://flagicons.lipis.dev/flags/4x3/' + lang + '.svg'
      }

      return finalLink;
    }
  }
}
</script>



<template>

<main>

<div>
  <ul>
    <li v-for="(movie, i) in store.movies" :key="i">
    <hr>
      <div>
        Title : {{movie.title}}
      </div>

      <div>
        Original title : {{ movie.name }}
      </div>

      <div>
        Original language : {{ movie.original_language }} 
      </div>

      <div>
        Flag: 
          <img :src="flagNations(movie.original_language)" :alt="movie.original_language">
      </div>
    
      <div>
        Vote average : {{ movie.vote_average }}
      </div>
    </li>
  </ul>
</div>

<hr>
<hr>
<hr>
<hr>
<hr>
<hr>
<hr>

<div>
  <ul>
    <li v-for="(serie, i) in store.series" :key="i">
    <hr>
      <div>
        Title : {{serie.name}}
      </div>

      <div>
        Original title : {{ serie.original_name }}
      </div>

      <div>
        Original language : {{ serie.original_language }} 
      </div>

      <div>
        Flag: 
          <img :src="flagNations(serie.original_language)" :alt="serie.original_language">
      </div>
    
      <div>
        Vote average : {{ serie.vote_average }}
      </div>
    </li>
  </ul>
</div>

</main>

</template>



<style lang="scss" scoped>

  img{
    height: 40px;
  }

</style>
