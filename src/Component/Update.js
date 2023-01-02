import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { uid } = useParams()
    const [user, setuser] = useState([])
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const navigate=useNavigate()
    useEffect(()=>{
        const getdata=async()=>{
           const {data}=await axios.get(`http://localhost:4040/user/${uid}`) 
           setuser(data)
        }
        getdata()
    },[])

    const handlesubmit = async(e) => {
        e.preventDefault()
        // const data = { name, email }
        await axios.put(`http://localhost:4040/user/${uid}`,{name,email})
        .then(result=>{
            console.log(result)
            window.alert("Update your data boss")
        })
    }
    return (
        <div>
            <h1>Hello Update Name----{user.name}</h1>
            <form className='space-y-2' onSubmit={handlesubmit}>
                <h1>Name:<input onChange={(e) => setname(e.target.value)} className='border-2 focus:outline-none' type="text" /></h1>
                <h1>Email:<input onChange={(e) => setemail(e.target.value)} className='border-2 focus:outline-none' type="text" /></h1>
                <h1><button className='bg-[green] text-white'>Submit</button></h1>
            </form>
            <h1><button className='bg-[#166275] mt-[20px] text-white py-1 px-5' onClick={()=>navigate(`/h`)}>Go All user</button></h1>
        </div>
    );
};

export default Update;