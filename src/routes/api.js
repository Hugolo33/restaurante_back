const router = require('express').Router()

// router.use('/users', require('./api/users'))

router.use('/reservations', require('./api/reservations'))

router.use('/menu', require('./api/menu'))

router.use('/reviews', require('./api/reviews'))

router.use("/shifts", require("./api/shifts"))

module.exports = router