const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * from users';
    return dbPool.execute(SQLQuery)
}

module.exports = {
    getAllUsers,
}
