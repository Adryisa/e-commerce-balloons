import React from 'react'
import user from '../../assets/user-logo.svg'
import Register from '../../components/register/Register'
import './registerPage.scss'

const RegisterPage = () => {
    return (
        <section className='register'>
        <p className='page-title'> Register </p> 
        <p className='bar'></p>
        <div className='logo-container'>
        <div className='logo-container__circle'>
        <img src={user} alt="user icon" className='logo-container__icon'/>
        </div>
        </div>
        <Register /> 
        </section>
    )
}

export default RegisterPage
