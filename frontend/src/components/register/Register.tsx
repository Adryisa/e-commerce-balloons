import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'
import registerUser from '../../services/userServices/registerService'

const Register = () => {

    const [register, setRegister] = useState({name: '', lastname: '', email: '', password: ''})

    const user = useSelector((store: rootState) => {
        return store.user
    })
    
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = async (evt: any) => {
        evt.preventDefault()
        const newUser = await registerUser(register)
        dispatch(addUser(newUser))
        navigate('/')
    }

    const handleChange = (evt: any, control: any) => {
        setRegister({...register, [control]: evt.target.value})
    }

    return (
       
       <form onSubmit={handleSubmit}>
           <div className='form-container'>
           <input 
                type="text" 
                name="user-name" 
                id="user-name" 
                placeholder="Name" 
                className='form-container__input'
                value={register.name}
                required
                onChange={(evt) => handleChange(evt, 'name')}
                data-testid='dos'
                />
                <input 
                type="text" 
                name="user-lastname" 
                id="user-lastname" 
                placeholder="Lastname" 
                className='form-container__input'
                value={register.lastname}
                required
                onChange={(evt) => handleChange(evt, 'lastname')}
                />
                <input 
                type="text" 
                name="user-email" 
                id="user-email" 
                placeholder="Email" 
                className='form-container__input'
                value={register.email}
                required
                onChange={(evt) => handleChange(evt, 'email')}
                />
                <input 
                type="password" 
                name="user-password" 
                id="user-password" 
                placeholder="Password" 
                className='form-container__input'
                value={register.password}
                required
                onChange={(evt) => handleChange(evt, 'password')}
                />
                <button type='submit' className='form-container__button'>Register</button>
            </div>
       </form>
    )
}

export default Register
