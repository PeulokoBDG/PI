const db = require('../config/db');

class User {
  static register(userData, callback) {
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [userData.name, userData.email, userData.password], callback);
  }

  static login(email, password, callback) {
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], callback);
  }

  // Outros métodos como updatePassword, updateProfile, etc.
}

module.exports = User;
