import React,{ useEffect }  from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



function Profile() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
   console.log(user)
   useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Welcome {user.firstName} !!</h1>
      <div className='event-upcoming'>
        <h2>Your Upcoming Events</h2>
        <div className='evt-list'>
            <ul>
                <li>event1</li>
                <li>event1</li>
                <li>event1</li>
            </ul>
        </div>
      </div>

      <div className='event-upcoming'>
        <h2>New Events</h2>
        <div className='evt-list'>
            <ul>
                <li>event1</li>
                <li>event1</li>
                <li>event1</li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Profile
