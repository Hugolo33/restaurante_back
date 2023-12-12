const selectAll = () => {
    return db.query('select * from reviews order by date_added desc');
};

const selectById = (id) => {
    return db.query('select * from reviews where id = ?', [id]);
}

const insert = ({ rating, content }, user_id, reservationId) => {
    return db.query('insert into reviews (rating, content, user_id, reservation_id) values (?, ?, ?,?)', [rating, content, user_id, reservationId]);
}

const remove = (reviewId) => {
    return db.query("delete from reviews where id = ?", [reviewId])
}

module.exports = { selectAll, insert, selectById, remove };