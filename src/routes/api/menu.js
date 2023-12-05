const router = require('express').Router();

const menuController = require('../../controllers/menu.controller');

const { checkRole } = require("../../helpers/middlewares.js")


router.get('/', checkRole('admin'), menuController.getAllMenus);
router.get('/:menuId', menuController.getMenuById)
router.post('/', checkRole('admin'), menuController.createMenu);

module.exports = router;