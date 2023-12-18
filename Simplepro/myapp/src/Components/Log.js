import '../Assets/Css/log.css';
const Log=()=>
{













  
  return(
 
    <>
    <body className="bodylo">

    <div class="login-container">
        
        <form class="container">
     
         <h2>Login</h2>
 
            <label for="username">USERNAME</label>
            <input type="text" id="username" name="username" required placeholder="Enter your name"/>

            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" required placeholder="Enter your password"/>
            <button type="submit">
                Submit
            </button>
            {/* <p>Don't have an account? <a href="#">Register here</a>.</p> */}


        </form>
    </div>
    
    
    </body>
    
    </>




  )
}
export default Log;