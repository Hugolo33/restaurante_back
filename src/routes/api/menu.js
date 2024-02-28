const router = require('express').Router();

const menuController = require('../../controllers/menu.controller');

const { checkRole, checkToken } = require("../../helpers/middlewares.js")
// POST api/menu


router.get('/', menuController.getAll);
router.get('/latest', menuController.getLatest);
router.get('/date/:menuDate', menuController.getByDate);
router.get('/main', menuController.getMain);
router.get('/:menuId', menuController.getMenuById);
router.post('/', checkToken, checkRole('admin'), menuController.create);
router.put('/removemain/:menuId', checkToken, checkRole('admin'), menuController.removeMainMenu);
router.put('/addmain/:menuId', checkToken, checkRole('admin'), menuController.addMainMenu);
router.put("/:menuId", checkToken, checkRole('admin'), menuController.updateMenu);
router.delete("/:menuId", checkToken, checkRole('admin'), menuController.deleteMenu)

module.exports = router;