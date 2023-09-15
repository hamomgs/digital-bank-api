const database = require('../database')
const accounts = database.contas
let id = 3

const listAccounts = (req, res) => {
  return res.status(200).json(accounts)
}

const createAccount = (req, res) => {
  const requiredFields = ['nome', 'cpf', 'data_nascimento', 'telefone', 'email', 'senha']

  for (const field of requiredFields) {
    if (!req.body[field] || !req.body[field].trim()) {
      return res.status(400).json({ mensagem: `O campo ${field} deve ser infomado.` })
    }
  }

  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
  const existingAccount = accounts.find((account) => {
    return account.usuario.cpf === cpf || account.usuario.email === email
  })

  if (existingAccount) {
    return res.status(400).json({ mensagem: 'Já existe uma conta com o cpf ou e-mail informado!' })
  }

  const newAccount = {
    numero: id.toString(),
    saldo: 0,
    usuario: {
      nome, 
      cpf,
      data_nascimento,
      telefone,
      email,
      senha
    }
  }

  accounts.push(newAccount)
  id++

  return res.status(201).json()
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