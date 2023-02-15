import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { axiosAuth } from '../../axiosSettings';
import {token} from '../../tokenData'


function Registration() {
  const location = useLocation();
  const eventData = location.state?.eventData;
  const user = location.state?.user;

  async function handleRegistration() {
    const { firstName, lastName, email, phonenumber } = user;
    const { eventname, _id } = eventData;
    const registrationData = {
      firstName,
      lastName,
      email,
      phonenumber,
      eventname,
      eventId: _id,
    };
    try {
      const response = await axiosAuth.post("/registerEvent", registrationData, token);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {eventData ? (
        <section className="form">
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              handleRegistration();
            }}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="eventname"
                name="eventname"
                value={eventData.eventname}
                readOnly
              />

              <p className="data-summary">{eventData.summary}</p>

              <img src={eventData.image} className="data-image" />
            </div>
            <div className="form-group">
              <button className="btn btn-block" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
      ) : (
        "no event"
      )}
    </div>
  );
}

export default Registration;
