const router = require('express').Router()

const reviewController = require('../../controllers/review.controller');
const { checkRole, checkToken } = require('../../helpers/middlewares');

router.get('/', reviewController.getAll);
router.get('/:reviewId', reviewController.getById)

router.post('/', checkToken, reviewController.create);

router.delete('/:reviewId', checkToken, checkRole('admin'), reviewController.remove);


module.exports = router;