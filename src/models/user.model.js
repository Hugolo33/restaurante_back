// BODY: name, email, password, phone_number, role

const insert = ({ name, email, password, phone_number, role = 'trabajador' }) => {
    return db.query(
        'insert into users (name, email, password, phone_number, role) values (?, ?, ?, ?, ?)',
        [name, email, password, phone_number, role]
    )
}

const selectById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}

const selectByEmail = (email) => {
    return db.query('select * from users where email = ?', [email])
}



module.exports = { insert, selectById, selectByEmail }