const router = require('express').Router();

const usersController = require('../../controllers/users.controller');

const { checkToken } = require('./../../helpers/middlewares')

router.post('/register', usersController.create);
router.post('/login', usersController.login);
router.put('/:userId', checkToken, usersController.update)
router.delete('/:userId', checkToken, usersController.deleteById)

module.exports = router;