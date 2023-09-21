<div>
  <b>Language:</b>
  <kbd title="Switch language">
    <a href="https://github.com/hamomgs/digital-bank-api/" title="Switch language" target="_blank">
      <img width="25em" alt="bandeira do reino unido" src="https://i.postimg.cc/wxCLhRYN/download-39.png" />
    </a>
  </kbd>
</div>

# API de um Banco Digital
<p>
  <img alt="Contagem de Linguagens no GitHub" src="https://img.shields.io/github/languages/count/hamomgs/digital-bank-api?color=%2304D361" />

  <img alt="Tamanho do Repositório" src="https://img.shields.io/github/repo-size/hamomgs/digital-bank-api" />
  
  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="Último Commit no GitHub" src="https://img.shields.io/github/last-commit/hamomgs/digital-bank-api" />
  </a>
    
   <img alt="Licença" src="https://img.shields.io/badge/license-MIT-brightgreen" />
</p>

## 💻 Sobre o Projeto

Este projeto, parte de um desafio proposto pela [Cubos Academy](https://cubos.academy/), tem como objetivo criar uma API para um banco digital com várias funcionalidades bancárias, como abertura de contas, transações e consultas de saldo.

---

## 🛣️ Como Executar o Projeto

Siga as instruções para executar o projeto em seu ambiente local.

### 🚀 Pré-requisitos

- Você precisará do [Git](https://git-scm.com/) e do [Node.js](https://nodejs.org/) instalados em seu computador para rodar o projeto.
- Além disso, é bom ter um editor como o [VSCode](https://code.visualstudio.com/) para trabalhar com o código.

### 🎲 Rodando

```bash
# Clone o projeto e acesse a pasta
$ git clone https://github.com/hamomgs/digital-bank-api.git
$ cd digital-bank-api

# Instale as dependências
$ npm install

# Execute a aplicação no modo de desenvolvimento
$ npm run dev

# A aplicação estará acessível na porta 3000 via http://localhost:3000
```

<p align="center">
  <a href="https://insomnia.rest/download" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

## 📚 Referências da API

### URL Base

```
http://localhost:3000/api
```

### 🧩 Endpoits

#### Contas
- `GET /contas?senha_banco=Cubos123Bank`: Lista todas as contas.
- `POST /contas/`: Cria uma nova conta.
- `PUT /contas/:numeroConta/usuario`: Atualiza informações da conta.
- `DELETE /contas/:numeroConta`: Remove uma conta.
- `GET /contas/saldo?numero_conta=123&senha=123`: Obtém o saldo da conta
- `GET /contas/extrato?numero_conta=123&senha=123`: Obtém o extrato da conta.
#### Transações
- `POST /transacoes/depositar`: Realiza um depósito.
- `POST /transacoes/sacar`: Realiza uma transferência.
- `POST /transacoes/transferir`: Realiza um saque.

### 📂 Estrutura de Diretórios

```markdown
digital-bank/
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── accountsController.js
│   │   └── transactionsController.js
│   ├── middlewares/
│   │   └── validatePassword.js
│   ├── routes/
│   │   ├── accountsRoutes.js
│   │   ├── index.js
│   │   └── transactionsRoutes.js
│   ├── database.js
│   └── index.js
├── .gitignore
├── LICENCE
├── package-lock.json
├── package.json
└── README.md
```

---

## 🛠 Tecnologias

- [JavaScript](https://devdocs.io/javascript/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://www.npmjs.com/package/express)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [date-fns](https://date-fns.org)

## 📝 Licença

Este projeto está sob a licença [MIT](https://github.com/hamomgs/digital-bank-api/blob/main/LICENCE).

Feito com 🧡 por Hamom Silva 👋🏽 [Entre em Contato!](https://www.linkedin.com/in/hamomgs/)
