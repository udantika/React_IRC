import {useState} from 'react'
const NavBar =()=>{
    const[visible,setVisible]=useState(false);
    const[data,setData]=useState({
        username :'',
        password:''
    })
    const toggle=()=>{
        setVisible(!visible)
    }
    const Login=(e)=>{
        e.preventDefault();
        alert(data.username + data.password)
    }

    const handleChange=(e)=>{setData({...data,[e.target.id]:e.target.value})}
    return(
      <div>
        <div class="navbar">
            <div class="navtitle">
                Hello World 
            </div>
            <ul class="navlinks">
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
            </ul>
        </div>
      </div>

    )

}