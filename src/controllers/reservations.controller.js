const { envioCorreo } = require("../helpers/utils")
const reservationsModel = require("../models/reservations.model")
const userModel = require('../models/user.model')
const shiftModel = require('../models/shifts.model')
const spotModel = require('../models/spots.model')
const dayjs = require('dayjs')
const { emailConfirmation } = require("../helpers/html-templates")

const getAll = async (req, res) => {
    try {
        const [result] = await reservationsModel.selectAll()
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const postAllByShifts = async (req, res) => {
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

const create = async (req, res) => {
    try {

        const [result] = await reservationsModel.insert(req.body)
        const { insertId } = result
        const [result2] = await reservationsModel.selectById(insertId)
        newReservation = result2[0]
        const email = req.body.email


        const [result3] = await userModel.selectById(req.body.user_id)
        user = result3[0]

        const [result4] = await shiftModel.selectById(req.body.shift_id)
        shift = result4[0]
        const [result5] = await spotModel.selectById(req.body.spot_id)
        spot = result5[0]

        const emailBody = emailConfirmation(user, newReservation, shift);
        console.log(emailBody);

        const emailAdmin = `Se ha realizado una reserva nueva en el restaurante a través de la web.
        Aquí la información:
        Fecha: ${dayjs(newReservation.r_date).format('DD/MM/YYYY')}
        Hora: ${shift.time} 
        Comensales: ${spot.max_seating}
        Cliente: ${user.name}
        Datos de contacto: ${user.email} / ${user.phone_number}
        Comentarios del cliente: ${newReservation.notes}
        Mesa: #${spot.id} ${spot.title}`

        envioCorreo('proyecto.casa.miranda@gmail.com', "Nueva reserva a través de la web", emailAdmin)
        envioCorreo(email, "Tu reserva en Casa Miranda 🌶", emailBody)

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
        const [result] = await reservationsModel.deleteById(reservationId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


module.exports = { getAll, getUser, create, update, removeId, postAllByShifts, getAllBeforeToday, getAllAfterToday, getByUserBeforeToday, getByUserAfterToday, getById }

