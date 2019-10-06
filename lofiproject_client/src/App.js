import React from 'react';
import './css/App.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  )
}

export default App;