<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" class="text-center">
        <h1>Cadastrar Novo Job</h1>
      </v-col>
    </v-row>

    <v-form>
      <v-row class="mt-4">
        <v-col cols="12" sm="6">
          <v-file-input
            label="Logo"
            v-model="logoFile"
            required
            placeholder="Selecione a logo"
            accept="image/*"
            show-size
            prepend-icon="mdi-upload"
            @change="onFileChange"
          >
            <template v-slot:selection="{ index }">
              <div v-if="logoFile" class="d-flex align-center">
                <v-icon small>{{ index !== null ? 'mdi-check-circle' : 'mdi-file-upload' }}</v-icon>
                <span class="ml-2">{{ logoFile.name }}</span>
              </div>
            </template>
            <template v-slot:hint>
              <span>Formato: PNG, JPG, até 5MB</span>
            </template>
          </v-file-input>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Cargo" v-model="cargo" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Regime" v-model="regime" required type="text"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Cidade" v-model="cidade" required type="text"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Estado" v-model="estado" required type="text"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Descrição" v-model="descricao" required type="text"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Requisitos" v-model="requisitos" required type="text"></v-text-field>
        </v-col>
      </v-row>

      <v-row class="mt-4" justify="center">
        <v-col cols="12" sm="6">
          <v-btn color="primary" @click="cadastrarJob" block>Cadastrar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
    export default {
      name: 'CadastroJobs',
      data() {
        return {
          logoFile: null,
          cargo: '', 
          regime: '', 
          cidade: '',
          estado: '',
          descricao: '',
          requisitos: ''
        }
      },
      methods: {
        async cadastrarJob() {
          const formData = new FormData();
          formData.append('logo', this.logoFile);
          formData.append('cargo', this.cargo);
          formData.append('regime', this.regime);
          formData.append('cidade', this.cidade);
          formData.append('estado', this.estado);
          formData.append('descricao', this.descricao);
          formData.append('requisitos', this.requisitos);

          try {
            const response = await fetch('http://localhost:8081/insereJobs', {
              method: 'POST',
              body: formData,
            });

            if (response.ok) {
              console.log('Job cadastrado com sucesso');
              this.resetForm();
              this.$router.push('/');
            } else {
              console.error('Erro ao cadastrar job');
            }
          } catch (error) {
            console.error('Erro:', error);
          }
        },
        resetForm() {
          this.logoFile = null;
          this.cargo = ''; 
          this.regime = ''; 
          this.cidade = '';
          this.estado = '';
          this.descricao = '';
          this.requisitos = '';
        },
        onFileChange(event) {
          const file = event.target.files[0];
          if (file) {
            this.logoFile = file;
          }
        }
      }
    }
</script>

<style>
    h1 {
    font-size: 28px;
    color: #811bcf;
    }
</style>
  