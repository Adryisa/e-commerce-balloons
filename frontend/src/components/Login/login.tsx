import React, { useState } from 'react';
import userServices from '../../services/userServices/userServices'

const Login = () => {
    const [loginState, setLoginState] = useState({email: '', password: ''})

    const handleSubmit = (evt: any) => {
        evt.preventDefault()
        userServices().logIn((loginState))
    }
    const handleLogOut = () => {
        userServices().logOut()
    }

    const handleChange = (evt: any, control: any) => {
        setLoginState({...loginState, [control]: evt.target.value})
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className='form-container'>
                <input 
                type="text" 
                name="user-email" 
                id="user-email" 
                placeholder="Email" 
                className='form-container__input'
                value={loginState.email}
                required
                onChange={(evt) => handleChange(evt, 'email')}
                />
                <input 
                type="password" 
                name="user-password" 
                id="user-password" 
                placeholder="Password" 
                className='form-container__input'
                value={loginState.password}
                required
                onChange={(evt) => handleChange(evt, 'password')}
                />
            </div>
            <button type="submit" className='form-container__button'>Login</button>
            <button type="reset" className='form-container__button' onClick={handleLogOut}>Logout</button>
        </form>

    )
}

export default Login