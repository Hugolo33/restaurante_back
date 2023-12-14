const ReviewModel = require('../models/review.model');

const getAll = async (req, res) => {
    try {
        const [result] = await ReviewModel.selectAll();
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const [result] = await ReviewModel.selectById(reviewId);
        res.json(result[0]);
    } catch (error) {
        res.json({ error: error.message });
    }
};

const getLatestFour = async (req, res) => {
    try {
        const [result] = await ReviewModel.selectLatestFour()
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    }
}

const create = async (req, res) => {
    try {
        const [result] = await ReviewModel.insert(req.body);
        const { insertId } = result
        const [newReview] = await ReviewModel.selectById(insertId)
        res.json(newReview[0]);

    } catch (error) {
        res.json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const [deletedReview] = await ReviewModel.selectById(reviewId)
        const [result] = await ReviewModel.remove(reviewId)

        res.json(deletedReview)

    } catch (error) {
        res.json({ fatal: error.message })
    }

}


module.exports = { getAll, create, remove, getById, getLatestFour };