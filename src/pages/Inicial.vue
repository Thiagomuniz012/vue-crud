<template>
  <div id="comp">
    <h1>Sejam Bem Vindos</h1>
    <h3>Busque por itens</h3>
    <div class="search-container">
      <input type="text" v-model="termoBusca" placeholder="Insira o nome">
    </div>

    <div v-if="resultados.length > 0">
      <div id="card" v-for="produto in resultados" :key="produto.id">
        <div class="produto-info">
          <div>{{ produto.nome }}</div>
          <div>{{ produto.descricao }}</div>
          <div>R$: {{ produto.preco }}</div>
        </div>
      </div>
    </div>
    <p v-else-if="termoBusca && resultados.length === 0">Nenhum resultado encontrado</p>

    <div v-if="!termoBusca || resultados.length === 0">
      <div id="card" v-for="produto in produtos" :key="produto.id">
        <div class="produto-info">
          <div>{{ produto.nome }}</div>
          <div>{{ produto.descricao }}</div>
          <div>R$: {{ produto.preco }}</div>
        </div>
      </div>
    </div>
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
  position: relative;
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
  width: 70%;
}

p {
  color: red;
}
</style>