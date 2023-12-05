const selectAll = () => {
    return db.query("select * from restaurant.reservations")
}

const selectById = (reservationId) => {
    return db.query('select * from reservations where id = ?', [reservationId])
}

const insertTable = ({ r_date, diners, notes, user_id, spot_id, shift_id }) => {
    return db.query("insert into reservations (r_date, diners, notes, user_id, spot_id, shift_id) values (?,?,?,?,?,?)", [r_date, diners, notes, user_id, spot_id, shift_id])
}


const updateReservation = (reservationId, { r_date, diners, notes, user_id, spot_id, shift_id }) => {
    return db.query("update reservations set r_date = ?, diners = ?, notes = ?, user_id = ?, spot_id = ?, shift_id = ? where id = ?", [r_date, diners, notes, user_id, spot_id, shift_id, reservationId])
}


const deleteReservationById = (reservationId) => {
    return db.query("delete from restaurant.reservations reservations where id = ?", [reservationId])
}

const selectByUserId = (userId) => {
    return db.query('select * from reservations where user_id = ?', [userId])
}


module.exports = { selectAll, selectById, insertTable, updateReservation, deleteReservationById, selectByUserId }