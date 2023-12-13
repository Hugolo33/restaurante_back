
const selectLatest = () => {
    return db.query('select * from menu order by m_date desc limit 1');
}

const selectAll = () => {
    return db.query('select * from menu order by m_date desc');
}

const selectId = (id) => {
    return db.query(`select * from menu where id = ?`, [id]);
}

const insert = ({ m_date, first_course, main_course, dessert, price }) => {

    return db.query('insert into menu (m_date, first_course, main_course, dessert, price) values (?,?,?,?,?)', [m_date, first_course, main_course, dessert, price]);
}


module.exports = {
    selectAll,
    selectId,
    insert,
    selectLatest
};