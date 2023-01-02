import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const navigate=useNavigate()
    const handlesubmit = async(e) => {
        e.preventDefault()
        // const data = { name, email }
        // fetch('http://localhost:4040/user', {
        //     method: 'POST', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log('Success:', data);
        //         alert("bd success")
        //     })
        await axios.post("http://localhost:4040/user",{name,email})
        .then(result=>{
            console.log(result.data)
            window.alert("Your data sent server")
        })
    }
    return (
        <div className='text-center'>
            <h1 className='text-[40px] font-bold'>User From</h1>
            <form className='space-y-2' onSubmit={handlesubmit}>
                <h1>Name:<input onChange={(e) => setname(e.target.value)} className='border-2 focus:outline-none' type="text" /></h1>
                <h1>Email:<input onChange={(e) => setemail(e.target.value)} className='border-2 focus:outline-none' type="text" /></h1>
                <h1><button className='bg-[green] text-white'>Submit</button></h1>
                <h1><button onClick={()=>navigate("/h")}>User</button></h1>
            </form>
        </div>
    );
};

export default Adduser;