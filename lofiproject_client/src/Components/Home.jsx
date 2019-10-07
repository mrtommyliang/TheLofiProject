import React from 'react';
import '../css/Home.css'
import { Route, Switch } from 'react-router-dom'
import About from './About'
import Dailymix from './Dailymix'
import Favorites from './Favorites'
import Programmers from './Programmers'
import Recommendations from './Recommendations'
import Login from './Login'
import Register from './Register';

const Home = (props) => {
  return (
    <div className="mainBody">
      <div className="bodyOverlay">
        <Switch>
          <Route exact path="/login" render={() => (
            <Login
              handleLogin={props.handleLogin}
              handleChange={props.authHandleChange}
              formData={props.formData} />)} />

          <Route exact path="/register" render={(props) => (
            <Register
              handleRegister={props.handleRegister}
              handleChange={props.handleChange}
              formData={props.formData} />)} />

          <Route exact path='/about' component={About} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/daily_mix' component={Dailymix} />
          <Route path='/recommended' component={Recommendations} />
          <Route path='/programmers_mix' component={Programmers} />
        </Switch>
      </div>
    </div>
  )
}

export default Home;