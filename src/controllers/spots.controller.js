const spotsModel = require("../models/spots.model")

const getAll = async (req, res) => {
    try {
        const [result] = await spotsModel.selectAll();
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
};

const create = async (req, res) => {
    try {
        const [result] = await spotsModel.insert(req.body)
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
};

const update = async (req, res) => {
    const { spotId } = req.params
    try {
        const [result] = await spotsModel.updateById(spotId, req.body)
        const [updateSpot] = await spotsModel.selectById(spotId)
        res.json(updateSpot)
    } catch (error) {
        res.json({ fatal: error.message })
    }
};

const remove = async (req, res) => {
    const { spotId } = req.params

    try {
        const [result] = await spotsModel.deleteById(spotId)
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
};
const postAllBut = async (req, res) => {
    try {
        const [result] = await spotsModel.selectAllBut(req.body);
        res.json(result)
    } catch (error) {
        res.json({ fatal: error.message })
    }
};

module.exports = { getAll, create, update, remove, postAllBut };