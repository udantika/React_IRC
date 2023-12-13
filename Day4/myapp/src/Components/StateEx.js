import React from 'react'
import {useState } from 'react'
const StateEx = () =>{
    const[data,setData]=useState(0);
    const inc = () =>{
        setData(data+1);
    }
    const dec = () =>{
        setData(data-1)
    }
    return(
        <>
        <button onClick={inc}>
            Increase
        </button>
        <p>{data} </p>
        <button onClick={dec}>
            Decrease
        </button>
        </>
    )
}




const [vsible, setVisible]=useState(true);

const toggle=()=>{
    setVisible(false)
}
setTimeout(()=>
{
    setVisible(false)
},5000)
return(
    <>
    {visible ?(
        <div className='card-wrapper'>
            <div className="card">
                <p className="cookieHeading">We use cookies</p>
                <p className="cookieDescription">This website uses cookies to ensure </p>
                <div className="buttonContainer">
                    <button  className="acceptButton" onClick={toggle}>Allow</button>
                    <button  className="declineButton" onClick={toggle}>Decline</button>
                </div>
            </div>
        </div>
    ) :(
        <button onClick={toggle}>
            Manage Cookies
        </button>
    )

}
    </>

)