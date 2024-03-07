// BODY: name, email, password, phone_number, role

const insert = ({ name, lastname, email, password, phone_number, role = 'client' }) => {
    return db.query(
        'insert into users (name, lastname, email, password, phone_number, role) values (?, ?, ?, ?, ?, ?)',
        [name, lastname, email, password, phone_number, role]
    )
}

const selectById = (userId) => {
    return db.query('select * from users where id = ?', [userId]);
}

const selectByEmail = (email) => {
    return db.query('select * from users where email = ?', [email])
}

const updateById = (userId, { name, lastname, email, password, phone_number, role }) => {
    return db.query('update users set name = ?, lastname = ?, email = ?, password = ?, phone_number = ?, role = ? where id = ?', [name, lastname, email, password, phone_number, role, userId])
}

const remove = (userId) => {
    return db.query('delete from users where id = ?', [userId])
}



module.exports = { insert, selectById, selectByEmail, updateById, remove }