const shiftsModel = require("../models/shifts.model")

const getAll = async (req, res) => {

    try {
        const [result] = await shiftsModel.selectAll()
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getById = async (req, res) => {
    const { shiftId } = req.params
    try {
        const [result] = await shiftsModel.selectById(shiftId)
        res.json(result[0])
    } catch (error) {
        res.json({ fatal: error.message })

    }
}

const create = async (req, res) => {

    try {
        const [result] = await shiftsModel.insert(req.body)
        const { insertId } = result
        const newShift = await shiftsModel.selectById(insertId)
        res.json(newShift)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const update = async (req, res) => {
    const { shiftId } = req.params

    try {
        const [result] = await shiftsModel.updateById(shiftId, req.body)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }

}

const remove = async (req, res) => {
    const { shiftId } = req.params

    try {
        const [result] = await shiftsModel.deleteById(shiftId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}




module.exports = { getAll, create, update, remove, getById }