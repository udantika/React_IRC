import React from "react";
import {Link} from "react-router-dom";
const Login1=()=>
 {
    return (
        
        <div class="login-container">
        
        <form class="container">
     <Link to='/log'>
         <h1>Login</h1>
     </Link>
 
            <label for="username">USERNAME</label>
            <input type="text" id="username" name="username" required placeholder="Enter your name"/>

            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
            <button type="submit">
                Submit
            </button>
            <p>Don't have an account? <a href="#">Register here</a>.</p>


        </form>
    </div>
     )
}
export default Login1;

