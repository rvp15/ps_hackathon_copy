const express = require('express')
const router = express.Router()

const userController = require('../Controllers/registeredUserController')
const { protect } = require('../Middleware/authMiddleware')

router.post('/registerEvent', protect, userController.registerEvent)
router.get('/registrations/:email', protect, userController.getAllRegistrations)
router.get('/events/:eventname', protect, userController.getAllRegistrationsByEvent)

module.exports = router;