const router = require('express').Router()

const accountsRoutes = require('./accountsRoutes')
const transactionsRoutes = require('./transactionsRoutes')

router.use('/contas', accountsRoutes)
router.use('/transacoes', transactionsRoutes)

module.exports = router