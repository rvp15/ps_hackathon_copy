const express = require('express')
const router = express.Router()

const userController = require('../Controllers/registeredUserController')
const { protect } = require('../Middleware/authMiddleware')

router.post('/registerEvent', protect, userController.registerEvent)

module.exports = router;