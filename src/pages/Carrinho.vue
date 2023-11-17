<template>
    <div>

    </div>
  </template>
  
  <script>
  import db from '../config/db';

  export default {
    // Lógica do componente
    data() {
    return {
      produtos: [] // Certifique-se de inicializar a variável produtos
    };
  },
  mounted() {
    this.carregarProdutos(); // Chama a função quando o componente é montado
  },
  methods: {
    carregarProdutos() {
      db.produtos.toArray().then((produtos) => {
        this.produtos = produtos;
      });
    },
  }
}
  </script>
  
  <style>
  /* Estilos do componente */
  </style>
  