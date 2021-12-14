import React from 'react'
import user from '../../assets/user-logo.svg'
import Login from '../../components/Login/login'
import './loginPage.scss'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <section className='login'>        
        <h2 className='page-title'> LOGIN </h2> 
        <p className='bar'></p>
        <div className='logo-container'>
        <div className='logo-container__circle'>
        <img src={user} alt="user icon" className='logo-container__icon'/>
        </div>
        </div>
        <Login />

        <div className='register-container'>
            <p className='register-container__text'>IF YOU ARE NOT REGISTERED</p> 
        <Link to='/register'> <button className='register-container__button'>REGISTER</button></Link> 
        </div>
        </section>

    )
}

export default LoginPage
