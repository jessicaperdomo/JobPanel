<template>
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12">
          <JobPanel :cardsH="4" :cardsV="2" bgColor="#f5f5f5" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
  import JobPanel from '@/components/JobPanel.vue';

  export default {
    name: 'VisualizarJob',
    components: {
      JobPanel
    }
  }
</script>

<style scoped>
    h1 {
      font-size: 28px;
      color: #731bd2;
    }
</style>
  