import LoginForm from '../components/login/LoginForm';
import React from 'react';
export default function LogIn() {

    const handleSubmit = () => console.log("Logeando");
    return (
        <>
        <div className='background-div'>
            <div className='login-card'>
                <h1 id = "tituloLogin" className='text-primary'>Log In</h1>
                <div id="container">
                    <LoginForm onSubmit={handleSubmit} />
                </div>

            </div>
        </div>
        <style jsx>{`
        .login-card{
            margin: 50% 8%;
            border: 1px solid lightgray;
            padding: 13% 4%;
            border-radius: 20px;
            background-color: white;
        }
        .background-div{
            width:  100%;
            height: 100%
            background: rgb(9,71,121);
            background: linear-gradient(-25deg, rgba(9,88,121,1) 24%, rgba(0,212,255,1) 100%);
        }
        `}</style>
        </>


    )
}