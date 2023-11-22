<template>

  <!-- Página inicial -->
  <div id="comp">
    <h1>Sejam Bem Vindos</h1>

    <!-- Input para realizar busca de produtos -->
    <h3>Busque por itens</h3>
    <div class="search-container">
      <input type="text" v-model="termoBusca" placeholder="Insira o nome">
    </div>

    <!-- Alerta de produto adicionado ao carrinho -->
    <div v-if="mensagemAdicionado" id="addAlert">
      <p>{{ mensagemAdicionado }}</p>
    </div>

    <!-- Mostra o resultado da busca -->
    <div v-if="resultados.length > 0">
      <div id="card" v-for="produto in resultados" :key="produto.id">
        <div class="produto-info">
          <div>{{ produto.nome }}</div>
          <div>{{ produto.descricao }}</div>
          <div>R$: {{ produto.preco }}</div>
          <i class="fa fa-cart-arrow-down" aria-hidden="true" @click="adicionarAoCarrinho(produto)" style="color:green"></i>
        </div>
      </div>
    </div>
    <p v-else-if="termoBusca && resultados.length === 0">Nenhum resultado encontrado</p>

    <!-- Carrega todos os produtos cadastrados -->
    <div v-if="!termoBusca || resultados.length === 0">
      <div id="card" v-for="produto in produtos" :key="produto.id">
        <div class="produto-info">
          <div>{{ produto.nome }}</div>
          <div>{{ produto.descricao }}</div>
          <div>R$: {{ produto.preco }}</div>
          <i class="fa fa-cart-arrow-down" aria-hidden="true" @click="adicionarAoCarrinho(produto)" style="color:green"></i>
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
      mensagemAdicionado: ''
    };
  },
  computed: {

    //Mostra o resultado das buscas
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

  //Carrega os produtos quando a página é montada
  mounted() {
    this.carregarProdutos();
  },

  //Carrega os produtos na lista
  methods: {
    carregarProdutos() {
      db.produtos.toArray().then((produtos) => {
        this.produtos = produtos;
      });
    },

    //Adiciona produtos ao carrinho, os produtos adicionados ao carrinho são salvos no localStorage
    adicionarAoCarrinho(produto) {
      const carrinho = JSON.parse(localStorage.getItem('produtosNoCarrinho')) || [];
      carrinho.push(produto);
      localStorage.setItem('produtosNoCarrinho', JSON.stringify(carrinho));

      this.mensagemAdicionado = `Você adicionou "${produto.nome}" ao carrinho!`;


      //Tempo de duração do Alert
      setTimeout(() => {
        this.mensagemAdicionado = '';
      }, 2000);
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

#addAlert{
  margin-block: 25px;
}
</style>
