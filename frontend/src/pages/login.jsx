import axios from 'axios';
import React, { useState } from 'react';

const Login=()=>{
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    

    const Loginfunction=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:8003/auth/login",{
            password,email
        })
        .then((res)=>{
                console.log(res.data)
                localStorage.getItem("token", res.data)
                
            })
        .catch((err)=>{
            console.log(err.message)
        })    
        }
    return(
        <>
        <h1>Login Form</h1>
        <form onSubmit={Loginfunction}>
            <div>
                <label htmlFor='email'>email</label>
                <input type="email" name="email" id="email"
                onChange={(e)=> setemail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input type="password" name="password" id="password"
                onChange={(e)=> setpassword(e.target.value)}
                />
            </div>
            <input type='submit'/>
        </form>
        </>
    )
}
export default Login