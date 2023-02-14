const express = require("express");
const router = express.Router();


const adminController = require('../Controllers/adminController')

router.post('/addevent', adminController.newEvent)
router.delete('/:id/removeevent', adminController.removeEvent)
router.put('/:id/editevent', adminController.editEvent)
router.get('/allevents', adminController.allEvent)

module.exports = router