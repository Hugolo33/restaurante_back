const selectAll = () => {
    return db.query("select * from restaurant.spots")
};

const selectById = (spotId) => {
    return db.query("select * from spots where id = ?", [spotId])
};

const insert = ({ title, max_seating, details }) => {
    return db.query("insert into restaurant.spots (title, max_seating, details) values (?, ?, ?)", [title, max_seating, details])
};

const updateById = (spotId, { title, max_seating, details }) => {
    return db.query("update restaurant.spots set title = ?, max_seating = ?, details = ? where id = ?", [title, max_seating, details, spotId])
}

const deleteById = (spotId) => {
    return db.query("delete from restaurant.spots reservations where id = ?", [spotId])
}




module.exports = { selectAll, selectById, insert, updateById, deleteById };