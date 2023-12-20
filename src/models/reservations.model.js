const selectAll = () => {
    return db.query("select * from restaurant.reservations")
}

const selectAllByShifts = ({ r_date, time }) => {
    return db.query("select r.*, s.time from reservations as r join shifts as s on r.shift_id = s.id where r.r_date=? and s.time = ? order by r.r_date desc, s.time asc", [r_date, time])
}
const selectBeforeToday = () => {
    return db.query('select r.*, s.time, u.name, u.email, u.phone_number from restaurant.reservations as r join restaurant.shifts as s on r.shift_id = s.id join restaurant.users as u on r.user_id = u.id where  r_date < now() order by r.r_date asc, s.time asc')
}

const selectByUserBeforeToday = (userId) => {
    return db.query('select r.*, s.time from restaurant.reservations as r join restaurant.shifts as s on r.shift_id = s.id where user_id = ? and r_date < now() order by r.r_date asc, s.time asc', [userId])
}

const selectByUserAfterToday = (userId) => {
    return db.query('select r.*, s.time from restaurant.reservations as r join restaurant.shifts as s on r.shift_id = s.id where user_id = ? and r_date >= now() order by r.r_date asc, s.time asc', [userId])
}

const selectAfterToday = () => {
    return db.query('select r.*, s.time, u.name, u.email, u.phone_number from restaurant.reservations as r join restaurant.shifts as s on r.shift_id = s.id join restaurant.users as u on r.user_id = u.id where  r_date >= now() order by r.r_date asc, s.time desc')
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
    return db.query("delete from restaurant.reservations where id = ?", [reservationId])
}

const selectByUserId = (userId) => {
    return db.query('select r.*, s.time from reservations as r join shifts as s on r.shift_id = s.id where r.user_id = ?', [userId])
}


module.exports = { selectAll, selectById, insert, update, deleteById, selectByUserId, selectAllByShifts, selectBeforeToday, selectAfterToday, selectByUserBeforeToday, selectByUserAfterToday }