const router = require("express").Router()

const reservationsController = require("../../controllers/reservations.controller")

const { checkRole, checkToken } = require('../../helpers/middlewares')

// la url viene con /api/reservations

router.get("/", checkRole('admin'), reservationsController.getAll)

router.post("/byshifts", reservationsController.postAllByShifts);

router.get("/before", checkRole('admin'), reservationsController.getAllBeforeToday);

router.get('/before/:userId', reservationsController.getByUserBeforeToday)

router.get("/after", checkRole('admin'), reservationsController.getAllAfterToday);

router.get('/after/:userId', reservationsController.getByUserAfterToday)

router.get("/user/:userId", reservationsController.getUser)

router.get('/:reservationId', reservationsController.getById)

router.post("/", reservationsController.create)

router.put("/:reservationId", reservationsController.update)

router.delete("/:reservationId", reservationsController.removeId)


module.exports = router