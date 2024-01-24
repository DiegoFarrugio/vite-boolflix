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

  methods: {


  },

  created(){
    axios.get(this.baseUrl).then((response) => {
      console.log(response);
      
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
