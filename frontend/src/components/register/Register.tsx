import React from 'react'
import { useState } from 'react'
import registerUser from '../../services/userServices/registerService'

const Register = () => {

    const [register, setRegister] = useState({name: '', lastname: '', email: '', password: ''})

    const handleSubmit = (evt: any) => {
        evt.preventDefault()
        registerUser(register)
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
                <button type='submit'>Register</button>
            </div>
       </form>
    )
}

export default Register
