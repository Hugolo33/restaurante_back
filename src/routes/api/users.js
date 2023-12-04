const router = require('express').Router();


const usersController = require('../../controllers/users.controller');


router.post('/register', usersController.create);
router.post('/login', usersController.login);
router.put('/:userId', usersController.update)

module.exports = router;