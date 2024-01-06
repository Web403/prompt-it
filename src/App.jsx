import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Home from './pages/Home'
import Signuppage from './pages/Signuppage'
import Profile from './components/Profile/Profile'

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Signuppage/>} path='/signup'/>
          <Route element={<Login/>} path='/login'/>
          <Route element={<Profile/>} path='/profile'/>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App