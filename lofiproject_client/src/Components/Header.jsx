import React from 'react';
import '../css/Header.css'
import { stack as Menu } from 'react-burger-menu'

const Header = () => {
  return (
    <div className="headerMain">
      <h1>The Lofi Project</h1>
      <Menu noOverlay>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="favorites" className="menu-item" href="/contact">Favorites</a>
        <a id="daily_mix" className="menu-item" href="/contact">Daily Mix</a>
        <a id="recommended" className="menu-item" href="/contact">Recommended</a>
        <a id="programmers_mix" className="menu-item" href="/contact">Programmer's Mix</a>
      </Menu>
    </div>
  )
}

export default Header;