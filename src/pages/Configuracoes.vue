<template>
    <div class="sair-cont">
        <router-link to="/" class="sair-conf">Sair</router-link>
    </div>
  </template>
  
  <script>
  import db from '../config/db';

  export default {
    data() {
    return {
      produtos: []
    };
  },
  mounted() {
    this.carregarProdutos();
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
    .sair-cont {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 90%;
    }
    .sair-conf{
        background-color: red;
        color: #fff;
        padding: 10px;
        justify-content: center;
        display: flex;
        width: 100px;
        border-radius: 5px;
        text-decoration: none;
    }
  </style>
  