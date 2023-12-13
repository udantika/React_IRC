

//login username and passwrd code


import {useState} from "react"

const TempComp =()=>{
    const[data,setData]=useState(
        {
            username:'',
            password:''
        }
    )
// const handleChange =()=>{
//     alert('input change')
// }
const handleChange =(e)=>{
    setData({...data,[e.target.id]:e.target.value})
    console.log(data)

}
// const handleSubmit =()=>{
//     alert('submitted')
// }
const handleSubmit =(e)=>{
    e.preventDefault()
    console("final data")
    console.log(data)
    // alert('submitted')
}
return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" id="username" onChange={handleChange}/>
        <input typr="password " placeholder="password" id="password" onChange={handleChange}/>
        <input type="submit" value="Login"/>
    </form>
    </>
)
}
export default TempComp;
