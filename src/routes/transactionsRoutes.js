const router = require('express').Router()
const {
  deposit,
  withdraw,
  transfer
} = require('../controllers/transactionsController')

router.post('/depositar', deposit)
router.post('/sacar', withdraw)
router.post('/transferir', transfer)

module.exports = router