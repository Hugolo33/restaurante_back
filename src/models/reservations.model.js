const selectAll = () => {
    return db.query("select * from restaurant.reservations")
}

const selectUserReservations = () => {}

const insertTable = ({ r_date, diners, notes, user_id, spot_id, shift_id }) => {
    return db.query("insert into reservations (r_date, diners, notes, user_id, spot_id, shift_id) values (?,?,?,?,?,?)", [r_date, diners, notes, user_id, spot_id, shift_id])
}


const updateReservation = (reservationId, {r_date, diners, notes, user_id, spot_id, shift_id}) => {
    return db.query("update reservations set r_date = ?, diners = ?, notes = ?, user_id = ?, spot_id = ?, shift_id = ? where id = ?", [r_date, diners, notes, user_id, spot_id, shift_id, reservationId])
}


const deleteReservationById = (reservationId) => {
    return db.query("delete from restaurant.reservations reservations where id = ?", [reservationId])
}


module.exports = { selectAll, selectUserReservations, insertTable, updateReservation, deleteReservationById }