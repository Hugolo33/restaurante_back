


const selectAll = () => {
    return db.query('select * from menu');
}

const selectId = (id) => {
    return db.query(`select * from menu where id = ?`, [id]);
}

const insert = ({ date, first_course, main_course }) => {

    return db.query('insert into menu (date, first_course, main_course) values (?,?,?)', [date, first_course, main_course]);
}


module.exports = {
    selectAll,
    selectId,
    insert
};