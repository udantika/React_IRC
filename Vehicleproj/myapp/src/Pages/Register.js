// import './Register.css';
import React from "react";
import {Link} from "react-router-dom";
const Register=()=>
 {
    return (
        
        <div>
      
<form>
       {/* <Link to = './reg'> */}
    <h2>Register</h2>
    {/* </Link> */}
    
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
export default Register;

