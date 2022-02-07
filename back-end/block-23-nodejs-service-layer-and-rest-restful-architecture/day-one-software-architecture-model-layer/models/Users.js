const connection = require('./connection');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM DB_users.tb_users;');
    return users;
};

module.exports = {
    getAll,
};