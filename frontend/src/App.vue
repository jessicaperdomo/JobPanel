<template>
  <v-app>
    <router-view />
  </v-app>
</template>
  
<script>
  export default {
    name: 'App'
  }
</script>
  
<style>
  #app {
    font-family: 'Roboto', sans-serif !important;
    letter-spacing: -0.4px;
    font-optical-sizing: initial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #ffdcac;
    overflow-x: hidden;
    overflow-y: clip;
    min-height: 100vh;
  }
  
  body{
    overflow-x: hidden;
  }
  
  ::selection{
    background: #ff5ca0;
    color: white;
  }
</style>