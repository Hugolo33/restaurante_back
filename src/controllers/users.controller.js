const bcrypt = require('bcryptjs');
const { createToken } = require('../helpers/utils');

const UserModel = require('../models/user.model');


const create = async (req, res) => {
    // BODY: name, email, password, phone_number, role
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 8);

        const [result] = await UserModel.insert(req.body);
        const [user] = await UserModel.selecById(result.insertId);

        res.json(user[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

const login = async (req, res) => {



}


module.exports = { create };
