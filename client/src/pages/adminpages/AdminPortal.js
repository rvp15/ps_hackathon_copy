import React from 'react'
import { Link } from "react-router-dom";


function AdminPortal() {
  return (
    <div>
 <h2>Admin Portal</h2>
<div className='admin-container'>
<Link className='new-event' to="/admin/createevents">Create New Event</Link >
<Link className='new-event' to="/admin/allevents" >All Events</Link >
 
</div>
    </div>
  )
}

export default AdminPortal
