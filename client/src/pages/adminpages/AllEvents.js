import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {allevent} from '../../features/events/eventSlice'
import { MdArrowBackIosNew } from "react-icons/md";
import { Link} from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

const axiosAuth = axios.create({
  baseURL: "http://localhost:3001/admin",
});

function AllEvents() {
const dispatch = useDispatch();
const [eventarray,setEventarray]= useState()
    useEffect(() => {
      allevents();
      // eslint-disable-next-line 
    }, []);

  const allevents = async () => {
    try {
      const response = await axiosAuth.get("/allevents");
      console.log(response);
      const eventarray =response.data.allevents
      setEventarray(eventarray)
      console.log(eventarray)
     dispatch(allevent(response.data))
    } catch (error) {
      console.log(error);
    }

  }
   return (
  <div>
    <span><Link to="/profile"><MdArrowBackIosNew/></Link></span>
    <h1>All Events</h1>
    <div className="allevent-container">
{
  eventarray?.map((item)=>{
    return(
      <div className="each-card">
      <MDBCard key={item._id}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={item.image} fluid alt='image' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{item.eventname}</MDBCardTitle>
        <MDBCardText className="summary">event detail</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard></div>
    )
  })
}

    </div>
   

  </div>
  )
}
export default AllEvents;
