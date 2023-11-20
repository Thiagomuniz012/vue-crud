<template>
    <div>

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

  </style>
  