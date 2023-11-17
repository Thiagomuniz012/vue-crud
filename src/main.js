import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Inicial from './Pages/Inicial.vue';
import Folheto from './Pages/Folheto.vue';
import Carrinho from './Pages/Carrinho.vue';
import Login from './Pages/Login.vue';
import '/node_modules/font-awesome/css/font-awesome.min.css'

const routes = [
  { path: '/', component: Login },
  { path: '/Inicial', component: Inicial },
  { path: '/Folheto', component: Folheto },
  { path: '/Carrinho', component: Carrinho },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
