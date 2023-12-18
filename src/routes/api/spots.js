const router = require('express').Router()

const spotsController = require("../../controllers/spots.controller");


const { checkRole, checkToken } = require('../../helpers/middlewares')
// la url viene con /api/spots



router.get("/", spotsController.getAll)

router.post("/", checkRole('admin'), spotsController.create)

router.post("/but", spotsController.postAllBut)

router.put("/:spotId", checkRole('admin'), spotsController.update)

router.delete("/:spotId", checkRole('admin'), spotsController.remove)



module.exports = router