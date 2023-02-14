import React from 'react';
import axios from "axios";
import { useState} from "react";
import { FaUser } from "react-icons/fa";
import {toast} from 'react-toastify';
import { useDispatch} from "react-redux";
import { setuser } from '../../features/auth/authSlice';
import { useNavigate } from "react-router-dom";


const axiosAuth = axios.create({
  baseURL: "http://localhost:3001/auth",
});

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phnumber: '',
    password: "",
    confirmpwd: "",
  });
  const {firstName, lastName,phnumber,email,password,confirmpwd } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(password !== confirmpwd){
      toast.error('Password do not match')
  }else{
    const userData ={firstName,lastName,phnumber,email,password}
  try{
    const response = await axiosAuth.post("/register", userData);
    console.log(response);
    dispatch(setuser(response.data));
    navigate("/profile");
    }catch(error){
console.log(error)
alert(error.response.data.error)
// toast.error()
    }
  }

  }
  return (
    <div>
     <section className="heading">
     <h1><FaUser/>Register</h1>
     <p>Create an Account</p>
     </section>
     <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              placeholder="Enter your firstname"
              onChange={handleChange}
            /> 
             <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              placeholder="Enter your lastName"
              onChange={handleChange}
            /><input
              type="number"
              className="form-control"
              id="phnumber"
              name="phnumber"
              value={phnumber}
              placeholder=" Phone Number"
              onChange={handleChange}
            />
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control"
              id="confirmpwd"
              name="confirmpwd"
              value={confirmpwd}
              placeholder="Confirm password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Register
