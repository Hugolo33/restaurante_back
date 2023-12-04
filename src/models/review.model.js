const selectAll = () => {
    return db.query('select * from reviews');
};

const selectById = (id) => {
    return db.query('select * from reviews where id = ?', [id]);
}

const insert = ({ rating, content, user_id }) => {
    return db.query('insert into reviews (rating, content, user_id) values (?, ?, ?)', [rating, content, user_id]);
}


module.exports = { selectAll, insert, selectById };