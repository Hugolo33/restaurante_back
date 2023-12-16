
const selectLatest = () => {
    return db.query('select * from menu order by m_date desc limit 1');
}

const selectAll = () => {
    return db.query('select * from menu order by m_date desc');
}

const selectId = (menuId) => {
    return db.query(`select * from menu where id = ?`, [menuId]);
}

const selectByDate = (menuDate) => {
    return db.query('SELECT * FROM restaurant.menu where m_date = ?', [menuDate])
}

const insert = ({ m_date, first_course, main_course, dessert, price }) => {
    return db.query('insert into menu (m_date, first_course, main_course, dessert, price) values (?,?,?,?,?)', [m_date, first_course, main_course, dessert, price]);
}


module.exports = {
    selectAll,
    selectId,
    insert,
    selectLatest,
    selectByDate
};