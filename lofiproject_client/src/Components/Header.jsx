import React from 'react';
import '../css/Header.css'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Header = (props) => {
  
  return (
    <div className="headerMain">
      <Link to="/" className="pagetitle">The Lofi Project</Link>
      <Sidebar 
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}/>
    </div>
  )
}

export default Header;