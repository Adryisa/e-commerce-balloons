import React, { useState } from 'react';
import userServices from '../../services/userServices/userServices'
import { useDispatch } from 'react-redux'
import './login.scss'
import { loadUser } from '../../redux/actions/actionCreators';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginState, setLoginState] = useState({email: '', password: ''})
    
    const dispatch = useDispatch()

    const navigate = useNavigate();



    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        const loggedUser = await userServices().logIn((loginState))
        dispatch(loadUser(loggedUser))
        navigate('/')
    }

    
    
    const handleChange = (evt: any, control: any) => {
        setLoginState({...loginState, [control]: evt.target.value})
    }

    return (
        <form onSubmit={handleSubmit} className='form-container'>
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
            <button type="submit" className='form-container__button'>Login</button>
        </form>
    )
}

export default Login