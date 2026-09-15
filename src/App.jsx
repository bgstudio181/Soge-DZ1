import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Main from './Page/main'
import Profile from './Page/profile'
import Login from './Page/profile-page/not-log-in-1'
import Favori from './Page/favori'
import Chat from './Page/chat'
import {Routes,Route,Link} from 'react-router-dom'
function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
      <Main/>
  
    </>
  )
}

export default App
