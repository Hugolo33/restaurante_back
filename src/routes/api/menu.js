const router = require('express').Router();

const menuController = require('../../controllers/menu.controller');

const { checkRole, checkToken } = require("../../helpers/middlewares.js")
// POST api/menu


router.get('/', menuController.getAll);
router.get('/latest', menuController.getLatest);
router.get('/date/:menuDate', menuController.getByDate);
router.get('/:menuId', menuController.getMenuById);
router.post('/', checkToken, checkRole('admin'), menuController.create);
router.put("/:menuId", menuController.updateMenu)
router.delete("/:menuId", menuController.deleteMenu)

module.exports = router;