// BODY: name, email, password, phone_number, role

const insert = ({ name, email, password, phone_number, rol = 'trabajador' }) => {
    return db.query(
        'insert into user (name, email, password, phone_number, rol) values (?, ?, ?, ?, ?)',
        [name, email, password, phone_number, rol]
    )
}

const selectById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}



module.exports = { insert, selectById }