import Dexie from 'dexie';

const db = new Dexie('SupermercadoAppDB');
db.version(1).stores({
  produtos: '++id, nome, descricao, preco',
});

export default db;
