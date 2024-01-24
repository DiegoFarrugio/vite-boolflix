<script>
import axios from 'axios';

export default {
  data(){
    return{

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
</header>


</template>



<style lang="scss" scoped>
@use "../assets/scss/header.scss" as *;

textarea{
    width: 15%
  }
</style>
