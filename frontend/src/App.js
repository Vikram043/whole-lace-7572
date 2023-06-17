import React from 'react'

import {Route,BrowserRouter as Router, Routes} from 'react-router-dom' 
import Home from './Pages/Home'
import AboutPage from './Pages/AboutPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/profile' Component={Profile}/>
        <Route path='/about' Component={AboutPage}/>
      </Routes>
    </Router>
  )
}

export default App
