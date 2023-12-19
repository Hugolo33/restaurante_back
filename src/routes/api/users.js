const router = require('express').Router();

const usersController = require('../../controllers/users.controller');

const { checkToken } = require('./../../helpers/middlewares')

router.get('/:userId', usersController.getById)
router.post('/register', usersController.create);
router.post('/login', usersController.login);
router.put('/:userId', checkToken, usersController.update)
router.delete('/:userId', checkToken, usersController.deleteById)

// ruta para enviar los emails
// router.post("/confirmation", usersController.envioCorreo)

module.exports = router;