import React from 'react';
import '../css/Header.css'
import Sidebar from './Sidebar'

const Header = (props) => {
  
  return (
    <div className="headerMain">
      <h1 className="pagetitle">The Lofi Project</h1>
      <Sidebar 
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}/>
    </div>
  )
}

export default Header;