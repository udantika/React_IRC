// import React from 'react';
import {Routes,Route} from "react-router-dom"
// import Home from './Pages/Home.js';
// import './Assets/Css/Style.css';
// import Login from './Pages/Login.js';
// import './Assets/Css/Login.css';
import Register from './Pages/Register.js';
import './Assets/Css/Register.css';
import About from './Pages/About.js';
import './Assets/Css/About.css';

function App(){
  return(
    <div>
      {/* <Home/> */}
      {/* <Login/> */}
      {/* <Register/> */}
       <About/>
      <Routes>
      {/* <Route path ='./log' element ={<login/>}/> */}
      {/* <Route path ='./reg' element ={<Register/>}/> */}
      </Routes>
    </div>
  )
}
export default App;


