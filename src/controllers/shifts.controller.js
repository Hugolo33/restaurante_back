const shiftsModel = require("../models/shifts.model")

const getAllShifts = async (req, res) => {
    
    try {
        const [result] = await shiftsModel.selectAll()
        res.json(result)

    } catch(error) {
        res.json({ fatal: error.message })
    }
}




module.exports = { getAllShifts }