import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { axiosAuth } from "../../axiosSettings";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link} from "react-router-dom";

function EventDetails() {
  const [registeredEvents, setRegistered] = useState([]);
  const location = useLocation();
  const eventData = location.state?.eventData;

  useEffect(() => {
    retrieveEventDetails();
  }, []);

  const retrieveEventDetails = async () => {
    const eventRegisters = await axiosAuth.get(
      `/register/events/${eventData.eventname}`
    );
    setRegistered(
      eventRegisters.data.userRegistrations
        ? eventRegisters.data.userRegistrations
        : []
    );
  };

  return (
    <div>
      <span><Link to="/profile"><MdArrowBackIosNew/></Link></span>
      <p>Registered users for event: <strong>{eventData.eventname}</strong></p>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {registeredEvents?.map((registeredEvent) => {
            return (
              <tr key={registeredEvent._id}>
                <td scope="col">{registeredEvent.firstName}</td>
                <td scope="col">{registeredEvent.lastName}</td>
                <td scope="col">{registeredEvent.email}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default EventDetails;
