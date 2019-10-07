import React from 'react';
import '../css/Header.css'
import Sidebar from './Sidebar'
import {Route, Link} from 'react-router-dom';

const Header = (props) => {
  
  return (
    <div className="headerMain">
      <h1>The Lofi Project</h1>
      <Sidebar />
    </div>
  )
}

export default Header;