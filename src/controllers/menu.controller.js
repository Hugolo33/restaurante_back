const menuModel = require('../models/menu.model');


const getAll = async (req, res) => {
    // si la peticion atraviesa con extio el metodo checkToken, puedo acceder al valor de req.user

    // console.log('FINAL', req.user);

    //Solo puede acceder el admin

    const [result] = await menuModel.selectAll();

    res.json(result);
}

const getLatest = async (req, res) => {


    const [result] = await menuModel.selectLatest();
    const lastMenu = result[0];
    res.json(lastMenu);
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


const updateMenu = async (req, res) => {

    const { menuId } = req.params
    
    try {
        req.body.id = menuId
        console.log("esto es menuId");
        console.log(menuId);
        const [result] = await menuModel.update(menuId, req.body)
        console.log(result)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


const deleteMenu = async (req, res) => {
    const { menuId } = req.params

    try {
        const [result] = await menuModel.deleteById(menuId)
        res.json(result)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}


module.exports = {
    getAll,
    getMenuById,
    create,
    getLatest,
    deleteMenu,
    updateMenu
}