import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Inicial from './Pages/Inicial.vue';
import Folheto from './Pages/Folheto.vue';
import Carrinho from './Pages/Carrinho.vue';
import Login from './Pages/Login.vue';
import Configuracoes from './Pages/Configuracoes.vue';
import '/node_modules/font-awesome/css/font-awesome.min.css'

//Página onde são definidas as rotas

const routes = [
  { path: '/', component: Login },
  { path: '/Inicial', component: Inicial },
  { path: '/Folheto', component: Folheto },
  { path: '/Carrinho', component: Carrinho },
  { path: '/Configuracoes', component: Configuracoes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
