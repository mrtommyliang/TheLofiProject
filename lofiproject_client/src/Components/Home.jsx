import React from 'react';
// import '../css/Home.css'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Dailymix from './Dailymix'
import Favorites from './Favorites'
import Programmers from './Programmers'
import Recommendations from './Recommendations'
import Login from './Login'
import Register from './Register';
import HomeSongs from './HomeSongs';
import '../css/Home.css'

const Home = (props) => {
  return (
    <div className="mainBody">
      <div className="bodyOverlay">
        <Switch>
          <Route exact path='/' render={() => (
            <div className="homeSongs">
              <HomeSongs
                songs={props.songs}
                favorites={props.favorites}
                removeFavorites={props.removeFavorites}
                getFavorites={props.getFavorites}
              />
            </div>
          )} />
          <Route path="/login" render={() => (
            <Login
              handleLogin={props.handleLogin}
              authHandleChange={props.authHandleChange}
              authFormData={props.authFormData} />)} />

          <Route exact path="/register" render={() => (
            <Register
              handleRegister={props.handleRegister}
              authHandleChange={props.authHandleChange}
              authFormData={props.authFormData} />)} />

          <Route exact path='/about' component={About} />
          <Route path='/favorites' render={() => (
            <div className="homeSongs">
              <Favorites 
                removeFavorites={props.removeFavorites}
                favorites={props.favorites}
              />
            </div>
          )} />
          <Route path='/daily_mix' component={Dailymix} />
          <Route path='/recommended' component={Recommendations} />
          <Route path='/programmers_mix' component={Programmers} />
        </Switch>
      </div>
    </div>
  )
}

export default Home;