// BODY: name, email, password, phone_number, role

const insert = ({ name, email, password, phone_number, role = 'client' }) => {
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

const updateById = (userId, { name, email, password, phone_number, role }) => {
    return db.query('update users set name = ?, email = ?, password = ?, phone_number = ?, role = ? where id = ?', [name, email, password, phone_number, role, userId])
}

const remove = (userId) => {
    return db.query('delete from users where id = ?', [userId])
}



module.exports = { insert, selectById, selectByEmail, updateById, remove }