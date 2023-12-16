const router = require("express").Router()
const { checkRole, checkToken } = require("../../helpers/middlewares")

const shiftsController = require("../../controllers/shifts.controller")

// la url viene con /api/shifts

router.get("/", shiftsController.getAll)
router.get('/:shiftId', shiftsController.getById)

router.post("/", checkToken, checkRole('admin'), shiftsController.create)

router.put("/:shiftId", checkToken, checkRole('admin'), shiftsController.update)

router.delete("/:shiftId", checkToken, checkRole('admin'), shiftsController.remove)


module.exports = router