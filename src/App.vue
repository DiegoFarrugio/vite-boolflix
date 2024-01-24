<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store.js';


export default {
  data(){
    return{
        store,
        baseUrl: 'https://api.themoviedb.org/3/search/movie?api_key=8b8bfeb0be27781c70ec92fbd8ee8dba&query=avatar'
    }
  },

  methods: {



  },

  created(){
    axios.get(this.baseUrl).then((response) => {
      console.log(this.baseUrl);

      this.store.films = response.data.results;
      console.log('array', this.store.films);
    });
  },


  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}



</script>



<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>



<style lang="scss">
@use "./assets/scss/main.scss" as *;
</style>
