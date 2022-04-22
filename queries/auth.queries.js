exports.CREATE_USERS_TABLE = 'CREATE TABLE IF NOT EXISTS users'(
    
)

exports.INSERT_NEW_USER = 'INSERT INTO users (username, email, password) VALUES (?,?,?)';
exports.UPDATE_USER = 'UPDATE users SET username = ?, email = ?, password = ? WHERE user_id = ?';