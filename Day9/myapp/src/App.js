import React from 'react'
import {Routes,Route}from 'react-router-dom'
import Users from './Pages/Users'
import Adduser from './Pages/Adduser'
import Edituser from './Pages/Edituser'
import './Assets/css/core.css'
const App=()=>{
  return(
    <>
    <Routes>
    <Route path='/' element={<Users/>}/>
    <Route path='/add' element={<Adduser/>}/>
    <Route path='/edit/:id' element={<Edituser/>}/>
    </Routes>
  </>
  )
}
export default App;