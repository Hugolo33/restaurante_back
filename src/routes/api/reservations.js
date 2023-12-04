const router = require("express").Router()

const reservationsController = require("../../controllers/reservations.controller")

// la url viene con /api/reservations

router.get("/:userId", reservationsController.getUserReservations)
router.get("/", reservationsController.getAllReservations)

router.post("/", reservationsController.addTable)

router.put("/:reservationId", reservationsController.updateReservation)

router.delete("/:reservationId", reservationsController.removeReservationId)


module.exports = router