const db = require('../config/db');

class User {
// Get all users
    static async getAllUsers() {
        try {
            const [rows] = await db.query('SELECT * FROM users');
            return rows;
        } catch (error) {
            throw new Error('Error fetching users: ' + error.message);
        }
    }

// Get user by ID
    static async getUserById(id) {
        try {
            const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
            return rows.length > 0 ? rows[0] : null;
        } catch (error) {
            throw new Error('Error fetching user by ID: ' + error.message);
        }
    }

// Create a new user
    static async createUser(name, email) {
        try {
            const [result] = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
            return { id: result.insertId, name, email };
        } catch (error) {
            throw new Error('Error creating user: ' + error.message);
        }
    }

// Update a user
    static async updateUser(id, name, email) {
        try {
            const [result] = await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
            if (result.affectedRows === 0) {
                return null; // No rows affected means user not found
            }
            return { id, name, email };
        } catch (error) {
            throw new Error('Error updating user: ' + error.message);
        }
    }

    // Delete a user
    static async deleteUser(id) {
        try {
            const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                return null; // No rows affected means user not found
            }
            return { message: 'User deleted successfully' };
        } catch (error) {
            throw new Error('Error deleting user: ' + error.message);
        }
    }
}

module.exports = User;
