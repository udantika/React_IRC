import React from 'react'
import MyComponent from './components/MyComponent';
import WithLoading from './components/WithLoading';
import NavBar from './components/Navbar';

const WrappedComponentWithLoading = WithLoading(MyComponent);
const App = () => {
  return (
    <>
      <div className="App">
        <WrappedComponentWithLoading />
        <NavBar/>
      </div>
    </>
  )
}

export default App;