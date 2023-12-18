const selectAll = () => {
    return db.query("select * from restaurant.shifts order by time asc")
}

const insert = ({ time, daytime }) => {
    return db.query("insert into restaurant.shifts (time, daytime) values (?,?)", [time, daytime])
}

const selectById = (shiftId) => {
    return db.query('select * from restaurant.shifts where id = ?', [shiftId])
}

const updateById = (shiftId, { time, daytime }) => {
    return db.query("update restaurant.shifts set time = ?, daytime = ? where id = ?", [time, daytime, shiftId])
}

const deleteById = (shiftId) => {
    return db.query("delete from restaurant.shifts reservations where id = ?", [shiftId])
}

module.exports = { selectAll, insert, updateById, deleteById, selectById }