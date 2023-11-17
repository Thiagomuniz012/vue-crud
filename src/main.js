import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Inicial from './components/Inicial.vue';
import Folheto from './components/Folheto.vue';
import Carrinho from './components/Carrinho.vue';
import '/node_modules/font-awesome/css/font-awesome.min.css'

const routes = [
  { path: '/', component: Inicial },
  { path: '/Folheto', component: Folheto },
  { path: '/Carrinho', component: Carrinho },
  // Adicione mais rotas conforme necessário para suas abas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
