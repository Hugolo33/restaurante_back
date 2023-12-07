const router = require("express").Router()

const shiftsController = require("../../controllers/shifts.controller")

// la url viene con /api/shifts

router.get("/", shiftsController.getAll)

router.post("/", shiftsController.create)

router.put("/:shiftId", shiftsController.update)

router.delete("/:shiftId", shiftsController.remove)


module.exports = router