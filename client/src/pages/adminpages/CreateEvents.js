import React from "react";
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Moment from "moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const token =
  localStorage.getItem("token") !== null
    ? JSON.parse(localStorage.getItem("token"))
    : "";

const axiosAuth = axios.create({
  baseURL: "http://localhost:3001/admin",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

function CreateEvents() {
  const navigate = useNavigate();
 
  const [form, setForm] = useState({
    eventname: "",
    eventdate: "",
    deadline: "",
    summary: "",
    limit: "",
    image: "",
  });
  // const evenDate = Moment(form.date).format("YYYY-MM-DD");
  // console.log(evenDate);
  const { eventname, eventdate, summary, deadline, limit, image } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    if (!eventname || !eventdate || !deadline || !summary || !limit || !image) {
      toast.error("Please enter all fields");
    } else {
      try {
        const response = await axiosAuth.post("/addevent", form, token);
        console.log(response.data);
        navigate("/admin/allevents")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <section className="heading">
        <p>Create an Event</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="eventname"
              name="eventname"
              value={eventname}
              placeholder="Enter eventname"
              onChange={handleChange}
            />
            <DatePicker
              onChange={(eventdate) => {
                setForm({ ...form, eventdate: eventdate });
              }}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              placeholderText={"select event date"}
              // isClearable={true}
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              withPortal
              id="eventdate"
              selected={form.eventdate}
            />
            <DatePicker
              onChange={(deadline) => {
                setForm({ ...form, deadline: deadline });
              }}
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              placeholderText={"deadline for registration"}
              showYearDropdown
              showMonthDropdown
              dropdownMode="select"
              withPortal
              id="deadline"
              selected={form.deadline}
            />
            <textarea
              type="text"
              id="summary"
              name="summary"
              value={summary}
              placeholder="Add Event Details"
              onChange={handleChange}
            ></textarea>
            <input
              type="number"
              id="limit"
              name="limit"
              value={limit}
              placeholder="Total Limit"
              onChange={handleChange}
            />
            <input
              type="text"
              id="image"
              name="image"
              value={image}
              placeholder="Add Image URL"
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
  );
}

export default CreateEvents;
