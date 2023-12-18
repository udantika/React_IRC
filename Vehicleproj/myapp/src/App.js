// import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home.js';
import './Assets/Css/Style.css';
import Login1 from "./Pages/Login1.js";
import './Assets/Css/Login.css';
// import Register from './Pages/Register.js';
// import './Assets/Css/Register.css';
// import About from './Pages/About.js';
// import './Assets/Css/About.css';

function App(){
  return(
    <div>
      <Home/>
      <Routes>
      <Route path ='./log' element ={<Login1/>}/>
      {/* <Route path ='./reg' element ={<Register/>}/> */}
      {/* <Route path ='./reg' element ={<about/>}/> */}
      </Routes>
    </div>
  )
}
export default App;


