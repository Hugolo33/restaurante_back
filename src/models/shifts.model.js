const selectAll = () => {
    return db.query("select * from restaurant.shifts")
}


module.exports = { selectAll }