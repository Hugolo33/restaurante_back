const router = require("express").Router()

const reservationsController = require("../../controllers/reservations.controller")

const { checkRole } = require('../../helpers/middlewares')

// la url viene con /api/reservations

router.get("/", checkRole('admin'), reservationsController.getAll)
router.get("/:userId", reservationsController.getUser)

router.post("/", checkRole('admin'), reservationsController.addTable)

router.put("/:reservationId", reservationsController.update)

router.delete("/:reservationId", reservationsController.removeId)


module.exports = router