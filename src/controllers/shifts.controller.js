const shiftsModel = require("../models/shifts.model")

const getAllShifts = async (req, res) => {
    
    try {
        const [result] = await shiftsModel.selectAll()
        res.json(result)

    } catch(error) {
        res.json({ fatal: error.message })
    }
}

const createShift = async (req, res) => {
    
    try {
        const [result] = await shiftsModel.insertShift(req.body)
        res.json(result)

    } catch(error) {
        res.json({ fatal: error.message })
    }
}

const updateShift = async (req, res) => {
    const { shiftId } = req.params

    try {
        const [result] = await shiftsModel.updateShiftById(shiftId, req.body)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }

}

const removeShift = async (req, res) => {
    const { shiftId } = req.params

    try {
        const [result] = await shiftsModel.deleteShiftById(shiftId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}




module.exports = { getAllShifts, createShift, updateShift, removeShift }