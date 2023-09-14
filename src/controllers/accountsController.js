const database = require('../database')
const accounts = database.contas

const listAccounts = (req, res) => {
  return res.status(200).json(accounts)
}

const createAccount = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
}

const updateAccountUser = (req, res) => {
  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
  const { numeroConta } = req.params
}

const deleteAccount = (req, res) => {
  const { numeroConta } = req.params
}

const getBalance = (req, res) => {
  const { numero_conta, senha } = req.params
}

const getStatement = (req, res) => {
  const { numero_conta, senha } = req.params
}

module.exports = {
  listAccounts,
  createAccount,
  updateAccountUser,
  deleteAccount,
  getBalance,
  getStatement
}