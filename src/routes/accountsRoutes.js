const router = require('express').Router()
const validatePassword = require('../middlewares/validatePassword')
const {
  listAccounts,
  createAccount,
  updateAccountUser,
  deleteAccount,
  getBalance,
  getStatement
} = require('../controllers/accountsController')

router.get('/', validatePassword, listAccounts)
router.post('/', createAccount)
router.put('/:numeroConta/usuario', updateAccountUser)
router.delete('/:numeroConta', deleteAccount)
router.get('/saldo', getBalance)
router.get('/extrato', getStatement)

module.exports = router