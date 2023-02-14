//This slice for All Ticket Handling
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    events: [],
  };

  export const eventSlice = createSlice({
    name: "events",
    initialState,
    reducers: {

    }
  })

  export default eventSlice.reducer;