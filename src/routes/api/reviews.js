const router = require('express').Router()

const reviewController = require('../../controllers/review.controller');
const { checkToken } = require('../../helpers/middlewares');

router.get('/', reviewController.getAll);

router.post('/', checkToken, reviewController.create);


module.exports = router