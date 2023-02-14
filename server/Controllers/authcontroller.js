const User = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

////////////////////////////////////////////////////////
//:Register: POST:/auth/register
const register = async (req, res) => {
console.log(req.body)
  const { firstName, lastName, phoneNumber, email, password } = req.body;
  try {
    //1.Check if user already exist
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    //2.if user doesnt exist encrypt pwd
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    //3.Add the new user to the database with encryptedpwd:
    const newUser = await User.create({
      ...req.body,
      password: encryptedPassword,
    });

    const payload = {
      id: newUser._id,
      email: newUser.email,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phoneNumber: newUser.phoneNumber
    };
    const token = jwt.sign({payload}, process.env.JWT_SECRET,{expiresIn:'30d'});
  
    res.status(200).json({ token, payload });

  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};
//////////////////////////////////////////////////////////////
//Login:(POST): auth/login
const login = async (req, res) => {
    const { email, password } = req.body;
  
  try {
    //  1. Check if the user exists
 const existingUser = await User.findOne({email})
      if (!existingUser) {
          return res.status(404).json({error: 'No such user exists.Signup Please!'})
      }
      //2.Check for password match
      const validPass =await bcrypt.compare(password, existingUser.password)
      // console.log(validPass)
      if (!validPass) {
          return res.status(403).json({ error: 'invalid credentials'})
      }

      if(existingUser && validPass){
        const payload = {
            id: existingUser._id,
            email: existingUser.email,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            phoneNumber: existingUser.phoneNumber
          };
          const token = jwt.sign({payload}, process.env.JWT_SECRET,{expiresIn:'30d'});
  
          res.status(200).json({ token, payload });
      }

  } catch (error) {
      console.log(error)
      res.status(400).json({error:error.message})
  }
};
//////////////////////////////////////////////////////////////
// Private Route
// GET: auth/userinfo
const getuserInfo = async(req,res)=>{
    // console.log(req.user)
    res.status(200).json(req.user)
}
module.exports = {
  login,
  register,
  getuserInfo
};
