const reservationsModel = require("../models/reservations.model")

const getAll = async (req, res) => {
    try {
        const [result] = await reservationsModel.selectAll()
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getAllByShifts = async (req, res) => {
    try {
        const [result] = await reservationsModel.selectAllByShifts(req.body)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}
const getAllBeforeToday = async (req, res) => {
    try {
        const [result] = await reservationsModel.selectBeforeToday()
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getByUserBeforeToday = async (req, res) => {
    const { userId } = req.params
    try {
        const [result] = await reservationsModel.selectByUserBeforeToday(userId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getAllAfterToday = async (req, res) => {
    try {
        const [result] = await reservationsModel.selectAfterToday()
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


const getByUserAfterToday = async (req, res) => {
    const { userId } = req.params
    try {
        const [result] = await reservationsModel.selectByUserAfterToday(userId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


const getUser = async (req, res) => {
    const { userId } = req.params
    try {
        const [result] = await reservationsModel.selectByUserId(userId)
        res.json(result)
    } catch (error) {
        res.json({ error: error.message })
    }
}

const getById = async (req, res) => {
    const { reservationId } = req.params
    try {
        const [result] = await reservationsModel.selectById(reservationId)
        res.json(result[0])
    } catch (error) {
        res.json({ error: error.message })
    }
}

const addTable = async (req, res) => {
    try {
        const [result] = await reservationsModel.insert(req.body)
        const { insertId } = result
        const [newReservation] = await reservationsModel.selectById(insertId)
        res.json(newReservation)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const update = async (req, res) => {

    const { reservationId } = req.params
    const userId = req.user.id;
    try {
        req.body.id = userId
        const [result] = await reservationsModel.update(reservationId, req.body)
        const [updatedReservation] = await reservationsModel.selectById(reservationId)
        res.json(updatedReservation[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const removeId = async (req, res) => {
    const { reservationId } = req.params

    try {
        const [result] = await reservationsModel.update(reservationId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


module.exports = { getAll, getUser, addTable, update, removeId, getAllByShifts, getAllBeforeToday, getAllAfterToday, getByUserBeforeToday, getByUserAfterToday, getById }

