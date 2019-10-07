import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Dailymix from './Dailymix'
import Favorites from './Favorites'
import Programmers from './Programmers'
import Recommendations from './Recommendations'


const Switcher = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/daily_mix' component={Dailymix} />
        <Route path='/recommended' component={Recommendations} />
        <Route path='/programmers_mix' component={Programmers} />
      </Switch>
    </main>
  )
}

export default Switcher