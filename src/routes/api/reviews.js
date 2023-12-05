const router = require('express').Router()

const reviewController = require('../../controllers/review.controller');
const { checkRole, checkToken } = require('../../helpers/middlewares');

router.get('/', checkToken, checkRole('admin'), reviewController.getAll);

router.post('/:reservationId', checkToken, reviewController.create);


module.exports = router;