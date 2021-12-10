import React from 'react'
import user from '../../assets/user-logo.svg'
import Login from '../../components/Login/login'

const LoginPage = () => {
    return (
        <section>        
        <p className='page-title'> LOGIN </p> 
        <p className='bar'></p>

        <div className='logo-container'>
            <img src={user} alt="user icon" className='logo-container__icon'/>
        </div>

        <Login />

        <div className='register-container'>
            <p className='register-container__text'>IF YOU ARE NOT REGISTER</p> <button className='register-container__button'>REGISTER</button>
        </div>
        </section>

    )
}

export default LoginPage
