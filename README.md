# Digital Bank API
<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hamomgs/digital-bank-api?color=%2304D361" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/hamomgs/digital-bank-api" />
  
  <a href="https://github.com/tgmarinho/README-ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hamomgs/digital-bank-api" />
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen" />
</p>

## 💻 About the Project

This project, part of a challenge proposed by [Cubos Academy](https://cubos.academy/), aims to create an API for a digital bank with various banking functionalities, such as account opening, transactions, and balance inquiries.

---

## 🛣️ How to Run the Project

Follow these instructions to run the project in your local environment.

### 🚀 Pre-requisites

- You'll need [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) installed on your computer to build this app.
- Additionally, having an editor like [VSCode](https://code.visualstudio.com/) for coding is quite advantageous.

### 🎲 Building

```bash
# Clone the project and access the folder
$ git clone https://github.com/hamomgs/digital-bank-api.git
$ cd digital-bank-api

# Install the dependencies
$ npm install

# Run the application in development mode.
$ npm run dev

# The application will be accessible on port:3000 via http://localhost:3000.
```

<p>
  <a href="https://insomnia.rest/download" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

---

## 📚 API Reference

### Base URL

```bash
http://localhost:3000/api
```

### 🧩 Endpoits

#### Accounts
- `GET /contas?senha_banco=Cubos123Bank`: List all accounts.
- `POST /contas/`: Create a new account.
- `PUT /contas/:numeroConta/usuario`: Update account information.
- `DELETE /contas/:numeroConta`: Delete an account.
- `GET /contas/saldo?numero_conta=123&senha=123`: Get account balance.
- `GET /contas/extrato?numero_conta=123&senha=123`: Get account statement.
#### Transactions
- `POST /transacoes/depositar`: Make a deposit.
- `POST /transacoes/sacar`: Make a transfer.
- `POST /transacoes/transferir`: Make a withdrawal.

### 📂 Directory Structure

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

## 🛠 Technologies

- [JavaScript](https://devdocs.io/javascript/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://www.npmjs.com/package/express)
- [date-fns](https://date-fns.org)

## 📝 License

This project is under the license [MIT](https://github.com/hamomgs/digital-bank-api/blob/main/LICENCE).

Made with 🧡 by Hamom Silva 👋🏽 [Get in Touch!](https://www.linkedin.com/in/hamomgs/)
