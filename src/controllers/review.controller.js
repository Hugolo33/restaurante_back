const ReviewModel = require('../models/review.model');

const getAll = async (req, res) => {
    try {
        const [result] = await ReviewModel.selectAll();
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// const getById = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const [result] = await ReviewModel.selectById(userId);
//         res.json(result);
//     } catch (error) {
//         res.json({ error: error.message });
//     }
// };

const create = async (req, res) => {
    try {
        const [result] = await ReviewModel.insert(req.body, req.user.id);
        const { insertId } = result
        const [newReview] = await ReviewModel.selectById(insertId)
        res.json(newReview[0]);

    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = { getAll, create };