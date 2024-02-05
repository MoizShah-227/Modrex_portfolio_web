import React from 'react'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
  } from "react-router-dom";
  import App from './App'
const Home = () => {
  return (
    <div className='home'>
      <Router>
      <Routes>
                <Route path='/' element={<App/>}/>          
      </Routes>
    </Router>
    </div>
  )
}

export default Home
