import React,{ useEffect }  from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdminPortal from './adminpages/AdminPortal';
import UserPortal from './userpages/UserPortal';



function Profile() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
   console.log(user.admin)

   useEffect(() => {
    if (!user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
  <div>
    <h1>Welcome {user.firstName} !!</h1>
  {user.admin ?(
    <>
    <AdminPortal/>
    </>
  ):(<>
<UserPortal/>
 </>)}
</div>
  )
}

export default Profile
