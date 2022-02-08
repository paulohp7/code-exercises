const e = require('express');
const connection = require('./connection');

const serialize = (user) => ({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email
});

const getAll = async () => {
    const [users] = await connection.execute('SELECT id, first_name, last_name, email FROM DB_users.tb_users;');
    return users.map(serialize);
};

const create = async (firstName, lastName, email, password) => {
    const query = 'INSERT INTO DB_users.tb_users (first_name, last_name, email, user_password) VALUES (?, ?, ?, ?)';
    const metaData = await connection.execute(query, [firstName, lastName, email, password]);
    return metaData;
}

module.exports = {
    getAll,
    create,
};