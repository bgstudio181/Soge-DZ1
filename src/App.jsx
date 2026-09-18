import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Main from './Page/main'
import Model from './Page/fill-page/model'
import Mark from './Page/fill-page/mark'
import Studio from './Page/fill-page/studio'
import Good from './Page/fill-page/good'
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
        <Route path="/model" element={<Model/>}/>
        <Route path="/mark" element={<Mark/>}/>
        <Route path="/studio" element={<Studio/>}/>
        <Route path="/good" element={<Good/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
  
    </>
  )
}

export default App
