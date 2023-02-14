import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {allevent} from '../../features/events/eventSlice'
const axiosAuth = axios.create({
  baseURL: "http://localhost:3001/admin",
});

function AllEvents() {
const dispatch = useDispatch();

    useEffect(() => {
      allevents();
      // eslint-disable-next-line 
    }, []);

  const allevents = async () => {
    try {
      const response = await axiosAuth.get("/allevents");
      console.log(response);
     dispatch(allevent(response.data))
    } catch (error) {
      console.log(error);
    }
  return <div>
    <h1>all tickets</h1>
  </div>;
  };
}
export default AllEvents;
