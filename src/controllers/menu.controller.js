const menuModel = require('../models/menu.model');


const getAll = async (req, res) => {
    // si la peticion atraviesa con extio el metodo checkToken, puedo acceder al valor de req.user

    // console.log('FINAL', req.user);

    //Solo puede acceder el admin

    const [result] = await menuModel.selectAll();

    res.json(result);
}

const getMenuById = async (req, res) => {
    try {
        const menuId = req.params.menuId;

        const [result] = await menuModel.selectId(menuId);

        if (result.length === 0) return res.json({ fatal: 'El id del menu no existe' });


        res.json(result[0]);

    } catch (error) {
        res.json({ fatal: error.message });
    }
}
const create = async (req, res) => {
    try {
        const [result] = await menuModel.insert(req.body);


        const [menu] = await (menuModel.selectId(result.insertId));
        res.json(menu[0]);

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


module.exports = {
    getAll,
    getMenuById,
    create
}