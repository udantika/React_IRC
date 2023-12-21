import { useState } from "react";
import { useEffect } from "react";

import { getUser,deleteUser } from '../services/api'
import { useNavigate } from "react-router-dom";
const Users = () => {
    const navigate = useNavigate
    const [user, setUser] = useState([])
    const fetchData = async () => {
        try {

            // await getUser()
            const res = await getUser()
            // console.log(res.data)
            setUser(res.data)

        }
        catch (e) {
            console.log(e)
        }
    }
const handleDelete=async(id)=>{
    try{
       const res= await deleteUser(id)
       if(res.status==200){
        alert('deleted')
       }
       fetchData()
    }
    catch(e){
        console.log(e)
    }
}
const handleEdit=(id)=>{
    navigate(`/edit/${id}`)
}
    console.log(user)
 
const handleAdd=()=>
{
    navigate('/')
}
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

            <table>
                <thread>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thread>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className="edit-btn" onClick={()=>handleEdit(user.id)}>Edit</button>
                            </td>
                            <td>
                                <button className="del-btn" onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>

                             {/* <tr>
                                <td>Swe</td>
                                <td>Nitho</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>  */}
                            
                        </tr>
                    ))
                    }
                </tbody>
            </table>
             <button onClick={()=> handleAdd} className ='edit-btn'> Add User</button>

        </>


    )
}
export default Users