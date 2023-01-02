import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axsis from 'axios'
import axios from 'axios';

const Home = () => {
    const [user, setuser] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
    const getiem=async()=>{
        const {data}=await axsis.get("http://localhost:4040/user")
        setuser(data)
    }
    getiem()
    }, [])
    const handledelete=async(id)=>{
    const con=window.confirm("You are sure Delete")
    if(con){
        const url=`http://localhost:4040/user/${id}`
         await axios.delete(url)
         .then(result=>{
            if(result.data.deletedCount===1){
                const clientuser=user.filter(u=>u._id !== id)
                setuser(clientuser)
            }
         })
    }else{
        console.log("No")
    }
    }
    return (
        <div>
            <h1>{user.length}</h1>
             {user.map(u=><li key={u._id}>{u.name}+
             <button onClick={()=>handledelete(u._id)} className='bg-[green] text-white my-1'>Delete</button>
             <button className='bg-[red] text-white' onClick={()=>navigate(`/u/${u._id}`)}>Update user</button>
             </li>)}
             <button onClick={()=>navigate("/a")}>Add</button>
        </div>
    );
};

export default Home;