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
    }
  },

  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  methods: {

    search(){
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: '8b8bfeb0be27781c70ec92fbd8ee8dba',
            query: this.store.searchText
          }
        })
        .then((response) => {
          console.log(response.data.results);
          this.store.movies = response.data.results;
        });
    }

  },


}
</script>



<template>
    <AppHeader @performSearch="search()"/>
    <AppMain/>
    <AppFooter/>

</template>



<style lang="scss">
@use "./assets/scss/main.scss" as *;
</style>
