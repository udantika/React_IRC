// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import NavBar from "./Components/NavBar";

// import ParentProp from "./Components/ParentProp";
// import StateEx from "./Components/StateEx";
// import TempComp from "./Components/TempComp";


import './Assets/Css/Style.css'
function App(){
    return(
        <>
        {/*<ParentProp/>*/}
        {/* <StateEx/> */}
        {/* <TempComp/> */}
        <NavBar/>
        </>
    );
}

export default App;
