const database = require('../database')
const accounts = database.contas
let id = 3

const listAccounts = (req, res) => {
  return res.status(200).json(accounts)
}

const createAccount = (req, res) => {
  const requiredFields = ['nome', 'cpf', 'data_nascimento', 'telefone', 'email', 'senha']

  for (const field of requiredFields) {
    const fieldToString = req.body[field].toString()

    if (!fieldToString || !fieldToString.trim()) {
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

  return res.status(201).send()
}

const updateAccountUser = (req, res) => {
  const requiredFields = ['nome', 'cpf', 'data_nascimento', 'telefone', 'email', 'senha']
  
  for (const field of requiredFields) {
    const fieldToString = req.body[field].toString()

    if (!fieldToString || !fieldToString.trim()) {
      return res.status(400).json({ mensagem: `O campo ${field} deve ser infomado.` })
    }
  }
  
  const { numeroConta } = req.params

  const validAccount = accounts.find((account) => {
    return account.numero === numeroConta
  })

  if (!validAccount) {
    return res.status(404).json({ mensagem: 'O número da conta informado não é válido.' })
  }

  const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
  const index = accounts.indexOf(validAccount)

  const filteredAccounts = accounts.filter((account) => {
    return account !== accounts[index]
  })

  const existingAccountData = filteredAccounts.find((account) => {
    return account.usuario.cpf === cpf || account.usuario.email === email
  })

  if (existingAccountData) {
    return res.status(400).json({ mensagem: 'O CPF ou Email informado já existe cadastrado!' })
  }

  accounts[index].usuario = { nome, cpf, data_nascimento, telefone, email, senha }

  return res.status(201).send()
}

const deleteAccount = (req, res) => {
  const { numeroConta } = req.params

  const validAccount = accounts.find((account) => {
    return account.numero === numeroConta
  })

  if (!validAccount) {
    return res.status(404).json({ mensagem: 'O número da conta informado não é válido.' })
  }

  if (validAccount.saldo > 0) {
    return res.status(400).json({ mensagem: 'A conta só pode ser removida se o saldo for zero!' })
  }

  const index = accounts.indexOf(validAccount)
  
  accounts.splice(index, 1)

  return res.status(204).send()
}

const getBalance = (req, res) => {
  const requiredFields = ['numero_conta', 'senha']
  
  for (const field of requiredFields) {
    if (!req.query[field]) {
      return res.status(400).json({ mensagem: `O número da conta e a senha são obrigatórios!` })
    }
  }

  const { numero_conta, senha } = req.query

  const validAccount = accounts.find((account) => {
    return account.numero === numero_conta
  })

  if (!validAccount) {
    return res.status(404).json({ mensagem: 'Conta bancária não encontada!' })
  }

  const accountPassword = validAccount.usuario.senha

  if (senha !== accountPassword) {
    return res.status(400).json({ mensagem: 'A senha informada está incorreta.' })
  }

  const balance = validAccount.saldo

  return res.status(200).json({ saldo: balance })
}

const getStatement = (req, res) => {
  const requiredFields = ['numero_conta', 'senha']
  
  for (const field of requiredFields) {
    if (!req.query[field]) {
      return res.status(400).json({ mensagem: `O número da conta e a senha são obrigatórios!` })
    }
  }

  const { numero_conta, senha } = req.query

  const validAccount = accounts.find((account) => {
    return account.numero === numero_conta
  })

  if (!validAccount) {
    return res.status(404).json({ mensagem: 'Conta bancária não encontada!' })
  }

  const accountPassword = validAccount.usuario.senha

  if (senha !== accountPassword) {
    return res.status(400).json({ mensagem: 'A senha informada está incorreta.' })
  }

  const deposits = database.depositos.filter((deposit) => {
    return deposit.numero_conta === numero_conta
  })

  const withdrawals = database.saques.filter((withdraw) => {
    return withdraw.numero_conta === numero_conta
  })

  const transfersMade = database.transferencias.filter((transfer) => {
    return transfer.numero_conta_origem === numero_conta
  })

  const transfersReceived = database.transferencias.filter((transfer) => {
    return transfer.numero_conta_destino === numero_conta
  })

  const statement = {
    depositos: deposits,
    saques: withdrawals,
    transferenciasEnviadas: transfersMade,
    transferenciasRecebidas: transfersReceived
  }

  return res.status(200).json(statement)
}

module.exports = {
  listAccounts,
  createAccount,
  updateAccountUser,
  deleteAccount,
  getBalance,
  getStatement
}