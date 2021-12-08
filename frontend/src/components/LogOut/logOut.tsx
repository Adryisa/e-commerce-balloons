import React from 'react'
import userServices from '../../services/userServices/userServices'

const LogOut = () => {

    const handleLogOut = () => {
        userServices().logOut()
    }

    return (
        <button type="reset" className='form-container__button' onClick={handleLogOut}>Logout</button>
    )
}

export default LogOut
