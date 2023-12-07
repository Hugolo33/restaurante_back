
const selectLatest = () => {
    return db.query('select * from menu order by m_date desc limit 1');
}

const selectAll = () => {
    return db.query('select * from menu order by m_date desc');
}

const selectId = (id) => {
    return db.query(`select * from menu where id = ?`, [id]);
}

const insert = ({ date, first_course, main_course }) => {

    return db.query('insert into menu (m_date, first_course, main_course) values (?,?,?)', [date, first_course, main_course]);
}


module.exports = {
    selectAll,
    selectId,
    insert,
    selectLatest
};