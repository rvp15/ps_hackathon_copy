const Event = require('../Models/Event')


//Add New Event POST:/admin/addevent
const newEvent = async (req, res) => {
    // res.status(200).json({msg:"addedEvent"})

    try{
        const addedEvent = await Event.create(req.body)
        res.status(200).json({event: addedEvent})
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}
//Remove event DELETE: admin/:id/removeevent
const removeEvent = async (req, res) => {
    try{
        const deletedEvent = await Event.findByIdAndDelete(req.params.id)
        res.status(200).json({event: deletedEvent})  
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    
}
// Edit event: PUT: admin/:id/editevent
const editEvent = async (req, res) => {
    try {
        const editedEvent = await Event.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({editedEvent: req.body})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//getallevents GET:admin/allevents
const allEvent = async(req,res)=>{
const allevents = await Event.find({})
res.status(200).json({allevents})
console.log(allevents)
}

module.exports = {
    newEvent,
    removeEvent,
    editEvent,
    allEvent,
    // eventParticipants

}