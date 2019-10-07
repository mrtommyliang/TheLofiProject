import React from 'react';
import '../css/Sidebar.css'
import { stack as Menu } from 'react-burger-menu'

const Sidebar = () => {
  return (
    <div>
      <Menu disableAutoFocus>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="favorites" className="menu-item" href="/contact">Favorites</a>
        <a id="daily_mix" className="menu-item" href="/daily_mix">Daily Mix</a>
        <a id="recommended" className="menu-item" href="/recommended">Recommended</a>
        <a id="programmers_mix" className="menu-item" href="/programmers_mix">Programmer's Mix</a>
      </Menu>
    </div>
  )
}

export default Sidebar