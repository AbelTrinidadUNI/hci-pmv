import LoginForm from '../components/login/LoginForm';
import React from 'react';
export default function LogIn() {

    const handleSubmit = () => console.log("Logeando");
    return (
        <div>
            <h1 id = "tituloLogin" className='text-primary'>Log In</h1>
            <div id="container">
                <LoginForm onSubmit={handleSubmit} />
            </div>

        </div>


    )
}