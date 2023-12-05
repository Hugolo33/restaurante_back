const router = require('express').Router()
const { checkToken } = require('../helpers/middlewares')

router.use('/users', require('./api/users'))

router.use('/reservations', checkToken, require('./api/reservations'))

router.use('/menu', require('./api/menu'))

router.use('/reviews', require('./api/reviews'))

module.exports = router