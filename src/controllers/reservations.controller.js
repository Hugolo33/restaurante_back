const reservationsModel = require("../models/reservations.model")

const getAllReservations = async (req, res) => {
    try {
        const [result] = await reservationsModel.selectAll()
        res.json(result)

    } catch(error) {
        res.json({ fatal: error.message })
    }
}

const getUserReservations = (req, res) => {
    res.end("PROBANDO GET")
}

const addTable = async (req, res) => {
    try {
        const [result] = await reservationsModel.insertTable(req.body)
        res.json(result)

    } catch(error) {
        res.json({ fatal: error.message })
    }
}

const updateReservation = async (req, res) => {
    const { reservationId } = req.params

    try {
        const [result] = await reservationsModel.updateReservation(reservationId,req.body)
        res.json(result)

    } catch(error) {
        res.json({ fatal: error.message })
    }
}

const removeReservationId = async (req, res) => {
    const { reservationId } = req.params

    try {
        const [result] = await reservationsModel.deleteReservationById(reservationId)
        res.json(result)

    } catch(error) {
        res.json({ fatal: error.message })
    }
}


module.exports = { getAllReservations, getUserReservations, addTable, updateReservation, removeReservationId }

