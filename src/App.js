import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Videos from './Components/Videos'
import SearchPage from './Components/SearchPage'
import './App.css'

function App () {
  return (
    <div className='app'>
      <Router>
        <Header />
        <Switch>
          <Route path='/search'>
            <div className='search__page'>
              <SideBar />
              <SearchPage />
            </div>
          </Route>

          <Route path='/'>
            <div className='app__page'>
              <SideBar />
              <Videos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
