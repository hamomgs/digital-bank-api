const database = require('../database')

const deposit = (req, res) => {
  const { numero_conta, valor } = req.body
}

const withdraw = (req, res) => {
  const { numero_conta, valor, senha } = req.body
}

const transfer = (req, res) => {
  const { numero_conta_origem, numero_conta_destino, valor, senha } = req.body
}

module.exports = {
  deposit,
  withdraw,
  transfer
}