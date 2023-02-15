import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateEvents } from "../../features/events/eventSlice";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const axiosAuth = axios.create({
  baseURL: "http://localhost:3001/admin",
});

function AllEvents() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [eventarray, setEventarray] = useState();
  useEffect(() => {
    retrieveEvents();
    // eslint-disable-next-line
  }, []);

  const retrieveEvents = async () => {
    try {
      const response = await axiosAuth.get("/allevents");
      console.log(response);
      const eventarray = response.data.allevents;
      setEventarray(eventarray);
      console.log(eventarray);
      dispatch(updateEvents(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <span>
        <Link to="/profile">
          <MdArrowBackIosNew />
        </Link>
      </span>
      <h1>All Events</h1>
      <div className="allevent-container">
        {eventarray?.map((item) => {
          return (
            <div className="each-card">
              <MDBCard key={item._id}>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage src={item.image} fluid alt="image" />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody className="card-body">
                  <MDBCardTitle>{item.eventname}</MDBCardTitle>
                  <MDBCardText className="summary">{item.summary} </MDBCardText>
                  <Link
                    to={user.admin ? `/eventdetail` : `/eventregister`}
                    state={{ eventData: item, user: user }}
                  >
                    {user.admin ? (
                      <MDBBtn>Details</MDBBtn>
                    ) : (
                      <MDBBtn>Register</MDBBtn>
                    )}
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AllEvents;
