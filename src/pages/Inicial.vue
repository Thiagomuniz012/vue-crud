<template>
  <div id="comp">

      <h1>Sejam Bem Vindos</h1>

      <h3>Busque por itens</h3>
    <input type="text" v-model="termoBusca" placeholder="Insira o nome">

    <div v-if="resultados.length > 0">
      <div v-for="produto in resultados" :key="produto.id">
        <div>{{ produto.nome }}</div>
      </div>
    </div>
    <p v-else-if="termoBusca && resultados.length === 0">Nenhum resultado encontrado</p>
  </div>
</template>

<script>
import db from '../config/db';

export default {
  data() {
    return {
      termoBusca: '',
      produtos: [],
    };
  },
  computed: {
    resultados() {
      const termo = this.termoBusca.trim().toLowerCase();
      if (termo) {
        return this.produtos.filter(produto =>
          produto.nome.toLowerCase().includes(termo)
        );
      }
      return [];
    }
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
#comp {
  text-align: center;
  position: relative; /* Permite o posicionamento absoluto dentro deste elemento */
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

input[type="text"] {
  padding: 8px;
  margin-right: 5px;
  width: 70%; /* Ajuste o tamanho conforme necessário */
}

p {
  color: red;
}
</style>