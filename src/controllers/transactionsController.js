const database = require('../database')
const accounts = database.contas
const { format } = require('date-fns')

const deposit = (req, res) => {
  const deposits = database.depositos
  const requiredFields = ['numero_conta', 'valor']
  
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ mensagem: `O número da conta e o valor são obrigatórios!` })
    }
  }

  const { numero_conta, valor } = req.body

  const validAccount = accounts.find((account) => {
    return account.numero === numero_conta
  })

  if (!validAccount) {
    return res.status(404).json({ mensagem: 'O número da conta informado não é válido.' })
  }

  if (valor < 0) {
    return res.status(400).json({ mensagem: 'O valor de depósito informado não é válido.' })
  }

  if (isNaN(valor)) {
    return res.status(400).json({ mensagem: 'O valor informado não é válido.' })
  }

  validAccount.saldo += Number(valor)

  const depositLog = {
    data: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
    numero_conta,
    valor: Number(valor)
  }
  
  deposits.push(depositLog)

  return res.status(204).send()
}

const withdraw = (req, res) => {
  const withdrawals = database.saques
  const requiredFields = ['numero_conta', 'valor', 'senha']
  
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ mensagem: `O número da conta, o valor e a senha são obrigatórios!` })
    }
  }

  const { numero_conta, valor, senha } = req.body

  const validAccount = accounts.find((account) => {
    return account.numero === numero_conta
  })

  if (!validAccount) {
    return res.status(404).json({ mensagem: 'O número da conta informado não é válido.' })
  }

  const accountPassword = validAccount.usuario.senha

  if (senha !== accountPassword) {
    return res.status(400).json({ mensagem: 'A senha informada está incorreta.' })
  }

  const accountBalance = validAccount.saldo

  if (accountBalance < valor) {
    return res.status(400).json({ mensagem: 'Saldo insuficiente.' })
  }

  if (valor < 0) {
    return res.status(400).json({ mensagem: 'O valor não pode ser menor que zero!' })
  }

  if (isNaN(valor)) {
    return res.status(400).json({ mensagem: 'O valor informado não é válido.' })
  }

  validAccount.saldo -= Number(valor)

  const withdrawLog = {
    data: format(new Date(), "dd-MM-yyyy HH:mm:ss"),
    numero_conta,
    valor: Number(valor)
  }

  withdrawals.push(withdrawLog)

  return res.status(204).send()
}

const transfer = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body
}

module.exports = {
  deposit,
  withdraw,
  transfer
}