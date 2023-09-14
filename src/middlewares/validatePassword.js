const senha = 'Cubos123Bank'

const validatePassword = (req, res, next) => {
  const { senha_banco } = req.params

  next()
}

module.exports = validatePassword