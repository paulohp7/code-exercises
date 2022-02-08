const connection = require('./connection');

const serialize = (user) => ({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email
});

const getAll = async () => {
    const [users] = await connection.execute('SELECT id, first_name, last_name, email FROM DB_users.tb_users');
    return users.map(serialize);
};

const create = async (firstName, lastName, email, password) => {
    const query = 'INSERT INTO DB_users.tb_users (first_name, last_name, email, user_password) VALUES (?, ?, ?, ?)';
    const metaData = await connection.execute(query, [firstName, lastName, email, password]);
    return metaData;
}

const isValidId = async (id) => {
    const [users] = await connection.execute('SELECT id, first_name, last_name, email FROM DB_users.tb_users');
    return users.some((user) => user.id === parseInt(id, 10));
}

const isValidCreate = (firstName, lastName, email, password) => {
    if (!firstName) return 'Name is mandatory';
    else if (!lastName) return 'Last Name is mandatory';
    else if (!email) return 'Email is mandatory';
    else if (!password) return 'Password is mandatory';
    else if (password.length < 6) return 'Password must have at least 6 digits';
    else return true;
}

const getUserById = async (id) => {
    const query = 'SELECT id, first_name, last_name, email FROM DB_users.tb_users WHERE id = ?';
    const [myUser] = await connection.execute(query, [id]);
    return myUser;
}

const update = async (id, firstName, lastName, email, password) => {
    const q_one = 'UPDATE DB_users.tb_users ';
    const q_two = 'SET first_name = ?, last_name = ?, email = ?, user_password = ? ';
    const q_three = 'WHERE id = ?';
    await connection.execute(q_one + q_two + q_three, [firstName, lastName, email,  password, id]);
    return getUserById(id);
}

module.exports = {
    getAll,
    create,
    update,
    isValidId,
    isValidCreate,
    getUserById,
};