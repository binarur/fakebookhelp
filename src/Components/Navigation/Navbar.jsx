import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className = "navbarbox">
       <div className="navbarleft">
          <span className="logo"> FakeBook </span>
       </div>

       <div className="navbarcenter">
        <div className="searchbarbox">
          <SearchIcon className = "searchIcon"/>
          <input placeholder="search for your friend" className="searchinput" />
        </div>
       
       </div>
          

       <div className="navbarright">
           <div className="navbariconlinks">
              <span className="navbarlink">Homepage</span>
              <span className="navbarlink">Profile</span>
           </div>

           <div className="navbaricons">
              <div className="navbaricon">
                <PersonIcon classname = "personicon"/>
                <span className="icontag">3</span>
              </div>
              <div className="navbaricon">
                <MessageIcon classname = "messageicon"/>
                <span className="icontag">3</span>
              </div>
              <div className="navbaricon">
                <SettingsIcon classname = "settingsicon"/>
                <span className="icontag">3</span>
              </div>
           </div>
           <div className="pic">
                <img src="/images/1.jpg" alt="" className="profilepicimg" />
              </div>
       </div>
      
    </div>
  )
}
