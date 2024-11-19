<template>
  <v-card class="job-card" @click="flipCard">
    <div class="card-inner" :class="{ flipped: flipped }">
      <div class="card-face front">
        <v-img v-if="job && job.logo" :src="job.logo" alt="Logo" class="job-logo" contain></v-img>
        <v-card-title class="pa-2" primary-title>
          <span class="cargo">{{ job.cargo }}</span>
        </v-card-title>
        <v-card-subtitle class="pa-2">
          <span class="regime">{{ job.regime }}</span>
        </v-card-subtitle>
        <v-card-text class="pa-2">
          <span class="local">{{ job.cidade }}, {{ job.estado }}</span>
        </v-card-text>
      </div>
      <div class="card-face back">
        <v-card-text>
          <span><strong>Descrição:</strong> {{ job.descricao }}</span><br>
          <span><strong>Requisitos:</strong> {{ job.requisitos }}</span>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'JobCard',
    props: {
      job: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        flipped: false
      };
    },
    methods: {
      flipCard() {
        this.flipped = !this.flipped;
      }
    }
  }
</script>

<style>
  .job-card {
    width: 100%;
    max-width: 300px;
    height: 350px;
    cursor: pointer;
    perspective: 1000px;
    margin: 20px auto;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .front {
    background-color: white;
  }

  .back {
    background-color: #f5f5f5;
    transform: rotateY(180deg);
  }

  .job-logo {
    height: 70px;
    width: 70px;
    object-fit: contain;
    margin-top: 10px;
  }

  .cargo {
    font-size: 18px;
    font-weight: bold;
  }

  .regime, .local {
    font-size: 14px;
  }
</style>