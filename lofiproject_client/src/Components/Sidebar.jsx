import React from 'react';
import '../css/Sidebar.css'
import { stack as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div>
      <Menu disableAutoFocus>
        <p className="helloUsername">{props.currentUser ? `Hello ${props.currentUser.username},` : null}</p>
        <Link to="/" id="home" className="menu-item">Home</Link>
        <Link to="/about" id="about" className="menu-item">About</Link>
        <Link to="/favorites" id="favorites" className="menu-item">Favorites</Link>
        <Link to="/daily_mix" id="daily_mix" className="menu-item">Daily Mix</Link>
        <Link to="/recommended" id="recommended" className="menu-item">Recommended</Link>
        <Link to="/programmers_mix" id="programmers_mix" className="menu-item">Programmer's Mix</Link>
        <div className="logReg">
          <Link to="/login" id="login" className="menu-item">Login</Link>
          <Link to="/register" id="register" className="menu-item">Register</Link>
          <Link to="/" onClick={props.handleLogout} id="logout" className="menu-item">Logout</Link>
        </div>
      </Menu>
    </div>
  )
}

export default Sidebar