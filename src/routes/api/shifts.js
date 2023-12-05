const router = require("express").Router()

const shiftsController = require("../../controllers/shifts.controller")

// la url viene con /api/shifts

router.get("/", shiftsController.getAllShifts)

router.post("/", shiftsController)



module.exports = router