const selectAll = () => {
    return db.query("select * from restaurant.shifts")
}

const insertShift = ({ time,daytime }) => {
    return db.query("insert into restaurant.shifts (time, daytime) values (?,?)", [time, daytime])
}

const updateShiftById = (shiftId, { time,daytime }) => {
    return db.query("update restaurant.shifts set time = ?, daytime = ? where id = ?", [time, daytime, shiftId])
}

const deleteShiftById = (shiftId) => {
    return db.query("delete from restaurant.shifts reservations where id = ?", [shiftId])
}

module.exports = { selectAll, insertShift, updateShiftById, deleteShiftById }