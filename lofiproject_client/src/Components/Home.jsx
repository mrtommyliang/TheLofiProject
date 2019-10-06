import React from 'react';
import '../css/Home.css'
import Songs_card from './Songs_card'

const Home = () => {
  return (
    <div className="mainBody">
      <div className="bodyOverlay">
        <Songs_card />
      </div>
    </div>
  )
}

export default Home;