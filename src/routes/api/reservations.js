const router = require("express").Router()

const reservationsController = require("../../controllers/reservations.controller")

const { checkRole, checkToken } = require('../../helpers/middlewares')

// la url viene con /api/reservations

router.get("/", checkRole('admin'), reservationsController.getAll)

router.post("/byshifts", checkRole('admin'), reservationsController.postAllByShifts);

router.get("/before", checkRole('admin'), reservationsController.getAllBeforeToday);

router.get("/after", checkRole('admin'), reservationsController.getAllAfterToday);


router.get("/:userId", reservationsController.getUser)

router.post("/", checkRole('admin'), reservationsController.addTable)

router.put("/:reservationId", checkToken, reservationsController.update)

router.delete("/:reservationId", reservationsController.removeId)


module.exports = router