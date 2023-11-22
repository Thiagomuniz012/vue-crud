import Dexie from 'dexie';

//Configuração do banco de dados

const db = new Dexie('SupermercadoAppDB');
db.version(1).stores({
  produtos: '++id, nome, descricao, preco',
});

export default db;
