<template>

    <!-- Tab menu -->
    <div class="tab-bar">
      <router-link to="/Inicial" class="tab-item" active-class="active"><i class="fa fa-2x fa-home" style="color:orange"></i></router-link>
      <router-link v-if="isAdmin" to="/Folheto" class="tab-item" active-class="active"><i class="fa fa-2x fa-newspaper-o" style="color:orange"></i></router-link>
      <router-link to="/Carrinho" class="tab-item" active-class="active"><i class="fa fa-2x fa-shopping-cart" style="color:orange"></i></router-link>
      <router-link to="/Configuracoes" class="tab-item" active-class="active"><i class="fa fa-2x fa-cog " style="color:orange"></i></router-link>
    </div>
  </template>

<script>
export default {
  computed: {

    //Verificação se é Admin, apenas Admin pode ver a página de Folheto onde é cadastrado novos produtos
    isAdmin() {
      const userRole = localStorage.getItem('userRole');
      return userRole === 'admin';
    }
  }
};
</script>

<style>
.tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0f0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.tab-item {
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
}

.tab-item:hover {
  background-color: #ddd;
}

.active {
  background-color: #ccc;
  font-weight: bold;
}
</style>
