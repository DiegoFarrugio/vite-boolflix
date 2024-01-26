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
    },

    //voteFilmSeries(){
      //return Math.ceil(this.voteAverage / 2);
    //}
  },
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
          <img class="flag_nations " :src="flagNations(movie.original_language)" :alt="movie.original_language">
      </div>
    
      <div>
        Voto arrotondato per eccesso: {{Math.ceil(movie.vote_average / 2)}}
      </div>

      <div>
        <i v-for="i in Math.ceil(movie.vote_average / 2)" :key="i" class="fa-solid fa-star"></i>
        <i v-for="k in (5 - Math.ceil(movie.vote_average / 2))" :key="j" class="fa-regular fa-star"></i>
      </div>

      <div class="mt-3">
        Movie cover
        <img class="posterPath" :src="'https://image.tmdb.org/t/p/w92/' + movie.poster_path" :alt="movie.poster_path">
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
          <img class="flag_nations" :src="flagNations(serie.original_language)" :alt="serie.original_language">
      </div>
    
      <div>
        Voto arrotondato per eccesso: {{Math.ceil(serie.vote_average / 2)}}
      </div>

      <div class="mt-3">
        Series cover
        <img class="posterPath" :src="'https://image.tmdb.org/t/p/w92/' + serie.poster_path" :alt="serie.poster_path">
      </div>
    </li>
  </ul>
</div>

</main>

</template>



<style lang="scss" scoped>

  .flag_nations{
    height: 40px;
  }

.posterPath{
  margin-left: 20px;
  margin-top: 10px;
}


</style>
