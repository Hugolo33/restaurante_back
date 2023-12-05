const bcrypt = require('bcryptjs');
const { createToken } = require('../helpers/utils');

const UserModel = require('../models/user.model');


const create = async (req, res) => {
    // BODY: name, email, password, phone_number,role 
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);

        const [result] = await UserModel.insert(req.body);
        const [newUser] = await UserModel.selectById(result.insertId);

        res.json(newUser);
    } catch (error) {
        res.json({ error: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const [result] = await UserModel.selectByEmail(email)
        if (result.length === 0) {
            return res.json({ error: 'Email y/o password incorrectos' })
        }
        const user = result[0]
        const iguales = bcrypt.compareSync(password, user.password)
        if (!iguales) {
            return res.json({ error: 'Email y/o password incorrectos' })
        }
        res.json({
            success: 'Login correcto',
            token: createToken(user)
        })
    } catch (error) {
        res.json({ error: error.message })
    }
}

const update = async (req, res) => {
    const { userId } = req.params
    try {
        const [result] = await UserModel.updateById(userId, req.body)
        const [updatedUser] = await UserModel.selectById(userId)
        res.json(updatedUser)
    } catch (error) {
        res.json({ error: error.message })
    }
}

const deleteById = async (req, res) => {
    const { userId } = req.params
    try {
        const [deletedUser] = await UserModel.selectById(userId);
        if (deletedUser[0].role === 'admin') {
            return res.json({ error: 'El admin no puede ser borrado' })
        }
        const [result] = await UserModel.remove(userId)
        res.json(deletedUser)
    } catch (error) {
        res.json({ error: error.message })
    }
}


module.exports = { create, login, update, deleteById };
