const router = require('express').Router();

const menuController = require('../../controllers/menu.controller');

const { checkRole, checkToken } = require("../../helpers/middlewares.js")
// POST api/menu

// - Crea un nuevo menú menú de ese día

router.get('/', checkToken, checkRole('admin'), menuController.getAllMenus);
router.get('/:menuId', menuController.getMenuById)
router.post('/', checkToken, checkRole('admin'), menuController.createMenu);

module.exports = router;