// import React , { useState } from 'react'

import { FaUser,FaSignOutAlt } from "react-icons/fa";
// import { FaSignOutAlt } from "react-icons/fa";
// import { MdOutlineLogin } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { AiTwotoneHome } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Link,useNavigate} from "react-router-dom";
import { logoutuser } from "../../features/auth/authSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
const handleLogout = ()=>{
  dispatch(logoutuser(user));
  navigate("/");
}
  return (
    <div className='header'>
      <Link to='/'><AiTwotoneHome/></Link>
   <div className='navbar-options'>
      <Link to='/login'> <RiLoginBoxFill /><span className='nav-span'>Login</span></Link> 
      <Link to='/register'> <FaUser/><span  className='nav-span'>Register</span></Link>
      <button className="btn" onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                  </button>
   </div>
    </div>
  )
}

export default NavBar
