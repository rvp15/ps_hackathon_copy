//This slice is for Register,Login,Logout

import { createSlice } from "@reduxjs/toolkit";

//Get user from local storage
let user = null;
if(localStorage.getItem("user")) {
  user = JSON.parse(localStorage.getItem("user"))
}
let token = null;
if(localStorage.getItem("token")) {
  token = JSON.parse(localStorage.getItem("token"))
}

const initialState = {
    user: user? user : null,
    token:token? token : null,
    admin: false
}

//Register User:
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
setuser:(state,action)=>{
    state.user = action.payload.payload;
    console.log(state.user);
    localStorage.setItem("user", JSON.stringify(state.user));
    state.token = action.payload.token; 
    console.log(action.payload.token)
    localStorage.setItem("token", JSON.stringify(state.token));   
},
logoutuser: (state, action) => {
  state.user = null;
  localStorage.removeItem("token");
  localStorage.removeItem("user");
},
    }
})

export const {setuser,logoutuser} = authSlice.actions
export default authSlice.reducer;