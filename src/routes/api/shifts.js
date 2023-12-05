const router = require("express").Router()

const shiftsController = require("../../controllers/shifts.controller")

// la url viene con /api/shifts

router.get("/", shiftsController.getAllShifts)

router.post("/", shiftsController.createShift)

router.put("/:shiftId", shiftsController.updateShift)

router.delete("/:shiftId", shiftsController.removeShift)


module.exports = router