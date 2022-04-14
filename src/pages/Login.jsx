import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/auth.service'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            await AuthService.login(username, password).then(
                () => {
                    navigate("/dashboard");
                    window.location.reload()
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='w-50% bg-violet-500 p-4 rounded'>
                    <div className='flex flex-col mb-4'>
                        <span className='text-white'>Username</span>
                        <input type='text' className='p-2 rounded' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='flex flex-col mb-4'>
                        <span className='text-white'>Password</span>
                        <input type='password' className='p-2 rounded' onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button className='w-full py-2 bg-violet-300 rounded' onClick={() => handleLogin()}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Login
