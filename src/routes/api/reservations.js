const router = require("express").Router()

const reservationsController = require("../../controllers/reservations.controller")

const { checkRole } = require('../../helpers/middlewares')

// la url viene con /api/reservations

router.get("/", checkRole('admin'), reservationsController.getAllReservations)
router.get("/:userId", reservationsController.getUserReservations)

router.post("/", checkRole('admin'), reservationsController.addTable)

router.put("/:reservationId", reservationsController.updateReservation)

router.delete("/:reservationId", reservationsController.removeReservationId)


module.exports = router