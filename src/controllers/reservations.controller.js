const reservationsModel = require("../models/reservations.model")

const getAllReservations = async (req, res) => {
    try {
        const [result] = await reservationsModel.selectAll()
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getUserReservations = async (req, res) => {
    const { userId } = req.params
    try {
        const [result] = await reservationsModel.selectByUserId(userId)
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    }
}

const addTable = async (req, res) => {
    try {
        const [result] = await reservationsModel.insertTable(req.body)
        const { insertId } = result
        const [newReservation] = await reservationsModel.selectById(insertId)
        res.json(newReservation)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const updateReservation = async (req, res) => {
    const { reservationId } = req.params
    const userId = req.user.id;
    try {
        req.body.id = userId
        const [result] = await reservationsModel.updateReservation(reservationId, req.body)
        const [updatedReservation] = await reservationsModel.selectById(reservationId)
        res.json(updatedReservation[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const removeReservationId = async (req, res) => {
    const { reservationId } = req.params

    try {
        const [result] = await reservationsModel.updateReservation(reservationId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


module.exports = { getAllReservations, getUserReservations, addTable, updateReservation, removeReservationId }

