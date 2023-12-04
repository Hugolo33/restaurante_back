const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
// CORREGIR ESTE IMPORT

const checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ error: 'Para poder acceder, debes tener la cabecera de autorización' })
    }
    const token = req.headers['authorization']
    let payload
    try {
        payload = jwt.verify(token, process.env.SECRET_KEY)
    } catch (error) {
        return res.json({ error: error.message })
    }

    const [result] = await User.selectById(payload.user_id)
    req.user = result[0]

    next()
}

const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== 'admin') {
            return res.json({ error: 'No tienes asignado el rol necesario para poder entrar aquí' })
        }
        next()
    }
}

module.exports = {
    checkToken,
    checkRole
}