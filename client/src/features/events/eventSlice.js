//This slice for All Event Handling
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventlist: [],
  };

  export const eventSlice = createSlice({
    name: "event",
    initialState,
    reducers: {
      createevent:(state,action)=>{
        state.eventlist = [...state.eventlist, action.payload]
      },
      allevent:(state,action)=>{
        state.eventlist=action.payload
      }
    }
  })
 export const {createevent,allevent} = eventSlice.actions
  export default eventSlice.reducer;