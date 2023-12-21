import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState} from 'react';
import {getUserId}  from 'react';
import { editUser } from '../services/api';
const Edituser = () => {
  const { id } = useParams()

  console.log(id)
  const navigate = useNavigate()
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const fetchUser=async()=>{
    try{

      const res = await getUserId(id)
      setData(res.data)
    }
    catch(e){
      console.log(e)  
    }
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res2=await editUser(id,data)
      console.log(res2.status)
      if(res2.status===200){
        alert('user changed')
        navigate(`/`)
      }
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <>
      <form>

        <input type='text' id='username' placeholder='username' />
        <input type='password' id='password' placeholder='password' />
        <button type='submit' className='submit-btn'>Add </button>
      </form>
    </>


  )
}
export default Edituser;