const router = require('express').Router()
const { checkRole, checkToken } = require("../helpers/middlewares")

router.use('/users', require('./api/users'))

router.use('/reservations', checkToken, require('./api/reservations'))

router.use('/menu', require('./api/menu'))

router.use('/reviews', require('./api/reviews'))

router.use("/shifts", checkToken, checkRole('admin'), require("./api/shifts"))

router.use('/spots', require('./api/spots'))

module.exports = router