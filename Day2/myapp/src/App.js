
// import Nav from './components/Nav'
import './Asserts/Css/style2.css';
function App() {
    return (
        
        <div>
      {/* <nav class="nav">
    
    <a href="#">Home</a>
    <a href="1st.html">Login</a>
    <a href="1-2.html">Register</a>
     </nav>
     <title>Your Website - Home</title>
    <link rel="stylesheet" href ="nav.css"></link>
    <div class="center-text">
    <p>
        "A ray of sunlight that is enough to create 
        rainbows out of someone's cloudy days..!!"
    </p>
    <p>
        
    </p>
    </div> */}

    
<form>
        <h2>Register</h2>
    
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>
    
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>
        
        <label for="Email">Email:</label>
        <input type="email" id="password" name="email" required/>
        
        <label for="number">Mobile Number:</label>
        <input type="number" id="number" name="number" required/>
    
        <input type="submit" value="Register"/>
</form>


    </div>
    
    )
}
export default App;

