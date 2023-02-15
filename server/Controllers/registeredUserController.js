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

module.exports = {
    registerEvent
  };