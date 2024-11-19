<template>
  <v-container :style="{ backgroundColor: bgColor }">
    <v-row class="mb-5" justify="center">
      <v-col cols="12" class="text-center">
        <slot name="company-info">
          <v-img src="http://localhost:8081/assets/logo.png" alt="Logo" class="job-logo mb-3"></v-img>
          <p class="title">Vagas online - Aqui você encontra seu novo emprego!</p>
        </slot>
      </v-col>
    </v-row>

    <v-row>
      <v-col 
        v-for="(job, index) in paginatedJobs" 
        :key="index" 
        :cols="12" 
        :sm="6" 
        :md="4" 
        :lg="3" 
        :xl="3"
      >
        <JobCard v-if="job && job.logo" :job="job" />
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-5">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-text-field 
          v-model="filtroCargo" 
          label="Informe um cargo que deseja..." 
          append-icon="mdi-magnify" 
          @input="resJobs"
          outlined
          dense
          full-width
        />
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-5 mb-5" v-if="showPaginacao">
      <v-btn class="mr-3" @click="pagAnt" :disabled="pagAtual === 1"> Anterior </v-btn>
      <v-btn @click="pagProx" :disabled="pagAtual === totalPag"> Próximo </v-btn>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';
  import JobCard from './JobCard.vue';

  export default {
    name: 'JobPanel',
    components: {
      JobCard
    },
    props: {
      cardsH: {
        type: Number,
        default: 3
      },
      cardsV: {
        type: Number,
        default: 2
      },
      bgColor: {
        type: String,
        default: '#ffffff'
      }
    },
    data() {
      return {
        filtroCargo: '',
        pagAtual: 1,
        jobs: [],
        itemPagina: this.cardsH * this.cardsV
      };
    },
    created() {
      this.resLogo();
      this.resJobs();
    },
    computed: {
      filteredJobs() {
        return this.jobs.filter(job => job.cargo.toLowerCase().includes(this.filtroCargo.toLowerCase()));
      },
      totalPag() {
        return Math.ceil(this.filteredJobs.length / this.itemPagina);
      },
      paginatedJobs() {
        const start = (this.pagAtual - 1) * this.itemPagina;
        return this.filteredJobs.slice(start, start + this.itemPagina);
      },
      showPaginacao() {
        return this.totalPag > 1;
      }
    },
    methods: {
      async resJobs() {
        try {
          const response = await axios.get(`http://localhost:8081/jobs/${this.filtroCargo}`);
          this.jobs = response.data;
        } catch (error) {
          console.error('Erro ao buscar jobs:', error);
        }
      },
      async resLogo() {
        try {
          const response = await axios.get(`http://localhost:8081/uploads/logo.png`);
        } catch (error) {
          console.error('Erro ao buscar jobs:', error);
        }
      },
      pagProx() {
        if (this.pagAtual < this.totalPag) {
          this.pagAtual++;
        }
      },
      pagAnt() {
        if (this.pagAtual > 1) {
          this.pagAtual--;
        }
      }
    }
  }
</script>

<style>
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #890cbe;
  }

  .v-card {
    transition: box-shadow 0.3s;
  }

  .v-card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  /*
  .job-logo {
    display: block !important;
    height: 70px;
    width: 70px;
    object-fit: contain;
    margin-top: 10px;
  }

  .job-logo img {
    display: block !important;
  }
  */
</style>
