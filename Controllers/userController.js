const User = require('../models/userModel');

class UserController {
    static async create(req, res) {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                return res.status(400).json({ message: 'Name and email are required' });
            }
            const newUser = await User.createUser(name, email);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAll(req, res) {
        try {
            const users = await User.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getById(req, res) {
        try {
            const user = await User.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async update(req, res) {
        try {
            const { name, email } = req.body;
            if (!name || !email) return res.status(400).json({ message: 'Name and email are required' });
            const updatedUser = await User.updateUser(req.params.id, name, email);
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async delete(req, res) {
        try {
            await User.deleteUser(req.params.id);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;
