const express = require('express')
const router = express.Router()

const authCtrl = require('../Controllers/authcontroller')
const { protect } = require('../Middleware/authMiddleware')

router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)
router.get('/userinfo', protect,authCtrl.getuserInfo)

module.exports = router