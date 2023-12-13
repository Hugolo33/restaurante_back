const router = require('express').Router()

const spotsController = require("../../controllers/spots.controller");

// la url viene con /api/spots

router.get("/", spotsController.getAll)

router.post("/", spotsController.create)

router.post("/but", spotsController.postAllBut)

router.put("/:spotId", spotsController.update)

router.delete("/:spotId", spotsController.remove)



module.exports = router