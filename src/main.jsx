import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './responsive.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Profile from './components/Profile.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import User from './components/User.jsx';
import UserPreview from './components/UserPreview.jsx';
import UserMenu from './components/UserMenu.jsx';
import Search from './components/Search.jsx';
import SearchPreview from './components/SearchPreview.jsx';
import Reels from './components/Reels.jsx';
import Messages from './components/Messages.jsx';
import Notification from './components/Notification.jsx';
import Add from './components/Add.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/user/previews/:userId' element={<UserPreview/>}/>
      <Route path='/user/menu' element={<UserMenu/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/search/previews/:userId' element={<SearchPreview/>}/>
      <Route path='/reels' element={<Reels/>}/>
      <Route path='/messages' element={<Messages/>}/>
      <Route path='/notifications' element={<Notification/>}/>
      <Route path='/add' element={<Add/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
