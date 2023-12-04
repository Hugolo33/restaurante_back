const router = require('express').Router();

const menuController = require('../../controllers/menu.controller');

const { checkRole } = require("../../helpers/middlewares.js")
// POST api/menu

// - Crea un nuevo menú menú de ese día

router.get('/', menuController.getAllMenus);
router.get('/:menuId', menuController.getMenuById)
router.post('/', menuController.createMenu);

module.exports = router;