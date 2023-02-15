const RegisteredUser = require("../Models/RegisteredUser");

const registerEvent = async (req, res) => {
    try{
        const registeredUpdate = await RegisteredUser.create(req.body)
        res.status(200).json({eventDetail: registeredUpdate})
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

const getAllRegistrations = async (req, res) => {
    try{
        const userRegistrations = await RegisteredUser.find({email: req.params.email})
        res.status(200).json({userRegistrations})  
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    
}
//register/events/:eventid
const getAllRegistrationsByEvent = async (req, res) => {
    try{
        const userRegistrations = await RegisteredUser.find({eventname: req.params.eventname})
        res.status(200).json({userRegistrations})  
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {
    registerEvent, 
    getAllRegistrations,
    getAllRegistrationsByEvent
  };