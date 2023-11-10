<template>
  <div>
    <h1 align="center">Padaria App</h1>

      <div id="card" v-for="produto in produtos" :key="produto.id">
    <div class="produto-info">
      <div>{{ produto.nome }}</div>
      <div>{{ produto.descricao }}</div>
      <div>R$: {{ produto.preco }}</div>
    </div>
    <div class="botoes">
      <button @click="editarProduto(produto)" class="editar-button">
        <i class="fa fa-edit"></i>
      </button>
      <button @click="excluirProduto(produto.id)" class="excluir-button">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </div>
    </div>

  <button @click="abrirModal" class="botao-adicao">+</button>
  
    <div class="modal" v-if="modalAberto">
  <div class="modal-conteudo">
    <form @submit.prevent="salvarProduto">
      <input v-model="produto.nome" class="input-field" placeholder="Nome do produto" required />
      <input v-model="produto.descricao" class="input-field" placeholder="Descrição" required />
      <input v-model="produto.preco" class="input-field" type="number" placeholder="Preço" required />
      <button type="submit" class="submit-button">{{ modoEdicao ? 'Atualizar' : 'Cadastrar' }}</button>
    </form>
  </div>
</div>
<TabMenu />

</template>

<script>
import Produto from '../components/Produto';
import db from '../config/db';
import TabMenu from '../components/TabMenu.vue';

export default {
  components: {
    TabMenu
  },
  data() {
    return {
      produto: new Produto(),
      produtos: [],
      modoEdicao: false,
      modalAberto: false,
    };
  },
  created() {
    this.carregarProdutos();
  },
  methods: {
    salvarProduto() {
    if (this.modoEdicao) {
      db.produtos.update(this.produto.id, {
        nome: this.produto.nome,
        descricao: this.produto.descricao,
        preco: this.produto.preco,
      }).then(() => {
        this.carregarProdutos();
        this.produto = new Produto();
        this.modoEdicao = false;
        this.fecharModal();
      });
    } else {
      db.produtos.add(this.produto).then(() => {
        this.carregarProdutos();
        this.produto = new Produto();
        this.fecharModal();
      });
    }
  },
    editarProduto(produto) {
      this.produto = { ...produto };
      this.modoEdicao = true;
      this.abrirModal();
    },
    excluirProduto(id) {
      db.produtos.delete(id).then(() => {
        this.carregarProdutos();
      });
    },
    carregarProdutos() {
      db.produtos.toArray().then((produtos) => {
        this.produtos = produtos;
      });
    },
    abrirModal() {
      this.modalAberto = true;
      this.novoProduto = new Produto();
    },
    fecharModal() {
      this.modalAberto = false;
    },
  },
};
</script>

<style>
@import '~font-awesome/css/font-awesome.css';

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto:wght@300&family=Ubuntu&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input {
  width: 100%;
  margin: 10px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input:focus {
  border-color: #007BFF;
  outline: none;
}
button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.botao-adicao {
  position: fixed;
  bottom: 60px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: #007BFF;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 50px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-conteudo {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
form {
  display: flex;
  flex-direction: column;
}
.input-field {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}
.submit-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
#card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.produto-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-right: 30px;
  margin-left: 18px;
}
.botoes {
  display: flex;
  flex-direction: row;
}

.editar-button{
  background-color: #45ff5a;
  margin-right: 5px;
}

.excluir-button{
  background-color: #ff4545;
}

h1{
  font-family: 'Ubuntu', sans-serif;
  margin: 20px;
}
</style>