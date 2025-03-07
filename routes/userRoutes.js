const express = require('express');
const UserController = require('../controllers/userController'); // Ensure this file exists

const router = express.Router();

// Create a new user
router.post('/', UserController.create); // Ensure this matches `/api/users`

// Get all users
router.get('/', UserController.getAll);

// Get user by ID
router.get('/:id', UserController.getById);

// Update user
router.put('/:id', UserController.update);

// Delete user
router.delete('/:id', UserController.delete);

module.exports = router;