import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import './SideBar.css'
import {AiOutlineClose,AiTwotoneCalendar,AiOutlineTwitter,AiFillLinkedin} from 'react-icons/ai'
import { Link } from "react-router-dom";
import { FaList,FaQuestion,FaFacebookF,FaPoll} from "react-icons/fa";


function SideNavBar() {
    const { collapseSidebar } = useProSidebar();

  return (
    <div className='side-bar' style={{ display: 'flex', height: '100%' }}>
    <Sidebar>
      <Menu>
        
        <MenuItem  icon={<FaList />}> Resource</MenuItem>
        <MenuItem icon={<AiTwotoneCalendar/>}>Upcoming Events</MenuItem>
        <MenuItem icon={<FaQuestion/>}>FAQ</MenuItem>
  <MenuItem icon={<FaPoll/>}>Live Poll</MenuItem>  
        <MenuItem icon={<FaFacebookF/>}>Facebook</MenuItem>
        <MenuItem icon={<AiOutlineTwitter/>}>Twitter</MenuItem>
      
        <MenuItem icon={<AiFillLinkedin/>}>Twitter</MenuItem>
      </Menu>
    </Sidebar>
    <main>
       
      <span className='close-btn' onClick={() => collapseSidebar()}> < AiOutlineClose/></span>
    </main>
  </div>
  )
}

export default SideNavBar