import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import VisualizarJob from '../views/VisualizarJob.vue';
import CadastroJobs from '../views/CadastroJobs.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/visualizarJob',
    name: 'visualizarJobs',
    component: VisualizarJob
  },
  {
    path: '/cadastroJobs',
    name: 'cadastroJob',
    component: CadastroJobs
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
