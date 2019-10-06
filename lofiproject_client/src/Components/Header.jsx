import React from 'react';
import '../css/Header.css'
import Sidebar from './Sidebar'

const Header = () => {
  return (
    <div className="headerMain">
      <h1>The Lofi Project</h1>
      <Sidebar />
    </div>
  )
}

export default Header;