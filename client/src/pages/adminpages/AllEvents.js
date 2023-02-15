import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateEvents } from "../../features/events/eventSlice";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosAuth } from "../../axiosSettings";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

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
      let registrations = [];
      if (!user.admin) {
        const allRegistrations = await axiosAuth.get(
          `/register/registrations/${user.email}`
        );
        registrations = allRegistrations.data
          ? allRegistrations.data.userRegistrations
          : [];
      }
      const response = await axiosAuth.get("/admin/allevents");
      const eventarray = [...response.data.allevents];
      for (let i = 0; i < eventarray.length; i++) {
        const dataItem = registrations.find(
          (x) => x.eventname === eventarray[i].eventname
        );
        console.log(dataItem);
        if (dataItem) {
          eventarray[i].isEventRegistered = true;
        }
      }
      console.log("eventarray", eventarray);
      setEventarray(eventarray);
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
      <h1>Upcoming Events</h1>
      <div className="allevent-container">
        {eventarray?.map((item) => {
          return (
            <div className="each-card" key={item._id}>
              <MDBCard>
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
                      <MDBBtn disabled={item.isEventRegistered}>
                        Register
                      </MDBBtn>
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
