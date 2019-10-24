const router = require('express').Router()

const users = require('../controllers/auth')
// const secureRouter = require('../lib/secureRouter')

router.route('/register')
  .post(users.register)

router.route('/login')
  .post(users.login)

module.exports = router