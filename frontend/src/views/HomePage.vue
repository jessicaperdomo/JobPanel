<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" class="text-center">
        <h1>Bem-vindo ao Painel de Jobs</h1>
      </v-col>
    </v-row>

    <v-row class="mt-4" justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn color="primary" block to="/visualizarJob">Visualizar Jobs</v-btn>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-btn color="secondary" block to="/cadastroJobs">Cadastrar Jobs</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>

<style>
  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #692eff;
  }
</style>
  