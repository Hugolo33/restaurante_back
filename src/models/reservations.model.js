const selectAll = () => {
    return db.query("select * from restaurant.reservations")
}

const selectAllByShifts = () => {
    return db.query("select r.*, s.time, s.daytime from reservations as r join shifts as s on r.shift_id = s.id order by r.r_date desc, s.time asc")
}
const selectBeforeToday = () => {
    return db.query("select * from restaurant.reservations where r_date <= now()")
}

const selectAfterToday = () => {
    return db.query("select * from restaurant.reservations where r_date >= now()")
}

const selectById = (reservationId) => {
    return db.query('select * from reservations where id = ?', [reservationId])
}

const insert = ({ r_date, diners, notes, user_id, spot_id, shift_id }) => {
    return db.query("insert into reservations (r_date, diners, notes, user_id, spot_id, shift_id) values (?,?,?,?,?,?)", [r_date, diners, notes, user_id, spot_id, shift_id])
}


const update = (reservationId, { r_date, diners, notes, user_id, spot_id, shift_id, review_id }) => {
    return db.query("update reservations set r_date = ?, diners = ?, notes = ?, user_id = ?, spot_id = ?, shift_id = ?, review_id =? where id = ?", [r_date, diners, notes, user_id, spot_id, shift_id, review_id, reservationId])
}


const deleteById = (reservationId) => {
    return db.query("delete from restaurant.reservations reservations where id = ?", [reservationId])
}

const selectByUserId = (userId) => {
    return db.query('select r.*, s.time from reservations as r join shifts as s on r.shift_id = s.id where r.user_id = ?', [userId])
}


module.exports = { selectAll, selectById, insert, update, deleteById, selectByUserId, selectAllByShifts, selectBeforeToday, selectAfterToday }