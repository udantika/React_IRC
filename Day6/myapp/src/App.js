import Nav from './Components/Nav'
import Home from "./Pages/Home";
import About from './Pages/About'
import Contact from './Pages/Contact'
import {Route,Routes} from "react-router";
function App() {
  return (
 <div className='App'>
 <Nav/>
 <Routes>
     <Route path="/Home" element ={<Home/>}/>
     <Route path="/about" element ={<About/>}/>
     <Route path="/Contact" element ={<Contact/>}/>

 </Routes>
 
 </div>
  );

}

export default App;
