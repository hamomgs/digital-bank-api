const senha = 'Cubos123Bank'

const validatePassword = (req, res, next) => {
  const { senha_banco } = req.query

  if (!senha_banco) {
    return res.status(401).json({ mensagem: 'A senha do banco não foi informada!' })
  }

  if (senha_banco !== senha) {
    return res.status(401).json({ mensagem: 'A senha do banco informada é inválida!' })
  }
  
  next()
}

module.exports = validatePassword