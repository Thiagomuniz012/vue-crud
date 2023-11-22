<template>
  <div>

    <!-- Página de carrinho -->
    <h1>Seu Carrinho</h1>

    <!-- Mostra os produtos adicionados ao carrinho -->
    <div v-if="produtosNoCarrinho.length > 0">
      <div id="card" v-for="produto in produtosNoCarrinho" :key="produto.id">
        <div class="produto-info">
          <div>{{ produto.nome }}</div>
          <div>{{ produto.descricao }}</div>
          <div>R$: {{ produto.preco }}</div>
          <i class="fa fa-times" aria-hidden="true" @click="removerDoCarrinho(produto)" style="color:red"></i>
        </div>
      </div>
    </div>
    <div v-else>
      <p id="vazio">O seu carrinho está vazio.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      produtosNoCarrinho: [],
    };
  },
  mounted() {
    this.carregarProdutosNoCarrinho();
  },
  methods: {

    //Carrega os produtos adicionados ao carrinho pegando do localStorage
    carregarProdutosNoCarrinho() {
      const produtosCarrinho = JSON.parse(localStorage.getItem('produtosNoCarrinho')) || [];
      this.produtosNoCarrinho = produtosCarrinho;
    },

    //Remove os produtos do carrinho
    removerDoCarrinho(produto) {
      this.produtosNoCarrinho = this.produtosNoCarrinho.filter(item => item.id !== produto.id);
      localStorage.setItem('produtosNoCarrinho', JSON.stringify(this.produtosNoCarrinho));
    },
  },
};
</script>

<style>
h1{
  text-align: center;
}
#vazio{
  text-align: center;
}
</style>
