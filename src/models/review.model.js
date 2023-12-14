const selectAll = () => {
    return db.query('select * from reviews order by date_added desc');
};

const selectAllAdmin = () => {
    return db.query('select rw.*, r.r_date, u.name, u.email, s.daytime from restaurant.reviews as rw join restaurant.reservations as r on rw.reservation_id = r.id join restaurant.users as u on rw.user_id = u.id join restaurant.shifts as s on r.shift_id = s.id order by rw.date_added desc')
}

const selectById = (reviewId) => {
    return db.query('select * from reviews where id = ?', [reviewId]);
}

const selectLatestFour = () => {
    return db.query('select * from reviews order by date_added desc limit 4')
}

const insert = ({ rating, content, user_id, reservation_id }) => {
    return db.query('insert into reviews (rating, content, user_id, reservation_id) values (?, ?, ?,?)', [rating, content, user_id, reservation_id]);
}

const remove = (reviewId) => {
    return db.query("delete from reviews where id = ?", [reviewId])
}

module.exports = { selectAll, insert, selectById, remove, selectLatestFour, selectAllAdmin };