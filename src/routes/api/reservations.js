const router = require("express").Router()

const reservationsController = require("../../controllers/reservations.controller")

const { checkRole, checkToken } = require('../../helpers/middlewares')

// la url viene con /api/reservations

router.get("/", checkRole('admin'), reservationsController.getAll)

router.get("/byshifts", checkRole('admin'), reservationsController.getAllByShifts);

router.get("/before", checkRole('admin'), reservationsController.getAllBeforeToday);

router.get('/before/:userId', reservationsController.getByUserBeforeToday)

router.get("/after", checkRole('admin'), reservationsController.getAllAfterToday);

router.get('/after/:userId', reservationsController.getByUserAfterToday)

router.get("/user/:userId", reservationsController.getUser)

router.get('/:reservationId', reservationsController.getById)

router.post("/", checkRole('admin'), reservationsController.addTable)

router.put("/:reservationId", checkToken, reservationsController.update)

router.delete("/:reservationId", reservationsController.removeId)


module.exports = router