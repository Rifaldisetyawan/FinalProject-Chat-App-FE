import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/Components/Login'
import Register from './Components/Register'
import Chat from './Components/Chat'
import SetAvatar from './Components/SetAvatar'

export default function App() {
  return <BrowserRouter>
    <Routes>
    <Route exact path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/setAvatar' element={<SetAvatar />} />
      <Route path='/' element={<Chat />} />
    </Routes>
  </BrowserRouter>
}
