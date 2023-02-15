import React from "react";
import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setuser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { axiosAuth } from "../axiosSettings";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosAuth.post("/login", form);
      console.log(response);
      toast.success("Login Successful");
      //https://blog.logrocket.com/using-react-toastify-style-toast-messages/
      dispatch(setuser(response.data));
      navigate("/profile");
    } catch (error) {
      toast.error("Invalid Credentials");
      console.log(error.response.data.error);
    }
  };
  return (
    <div>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login!
        </h1>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
