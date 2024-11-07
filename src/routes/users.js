const express = require('express');
const UserController = require('../controllers/users');
const router = express.Router();



router.get('/', UserController.getAllUsers);

// Create user router
router.post('/', UserController.createUsers);

// UPDATE user router
router.patch('/:id', UserController.UpdateUser);

router.delete('/:id', UserController.DeleteUser);
module.exports = router;