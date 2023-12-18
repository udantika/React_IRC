import React from 'react';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Log from './Components/Log.js';
import Register from './Components/Register.js';
import Footer from './Components/Footer.js';
// import Contact from './Components/Contact.js';ls



import  { BrowserRouter as Router,Routes,Route } from "react-router-dom";



function App(){
  return(
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Log" element={<Log/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/Footer" element={<Footer/>}></Route>
        {/* <Route path="/Contact" element={<Contact/>}></Route>  */}
      </Routes>
    </Router>
    
    
    </>
    )
}
export default App;