import React from 'react'
import './App.css'
// import Profile from './components/Profile'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <Outlet/>
    {/* <Toaster position='top-left'/> */}
    <Toaster/>
    {/* <Profile/> */}
    </>
  )
}

export default App