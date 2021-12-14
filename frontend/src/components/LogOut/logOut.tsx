import React from 'react'
import { useSelector } from 'react-redux'
import { rootState } from '../../redux/reducers'
import userServices from '../../services/userServices/userServices'
import { Link } from 'react-router-dom'

const LogOut = () => {
    
    const isLogged = useSelector((store: rootState) => {
        return store.user.cart
    })       

    const handleLogOut = () => {
        userServices().logOut()
    }

    return (
        <div> 
            {
            isLogged ? <button type="reset" className='form-container__button' onClick={handleLogOut}>LogOut</button> : 
            <Link to='/login'><button className='form-container__button'>Login</button></Link>
            }
        </div>
       
    )
}

export default LogOut
