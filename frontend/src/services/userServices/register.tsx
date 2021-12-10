import axios from 'axios'
import User from '../../interfaces/userInterface'
import userServices from './userServices'

export default function registerUser(user: User) {

    const urlBase = 'http://localhost:3200/api'

   axios.post(`${urlBase}/users`, { 
       name: user.name,
       lastname: user.lastname,
       email: user.email,
       password: user.password
   }).then((response) => {
       console.log(response)
       localStorage.setItem('user', JSON.stringify(response.data))
       window.location.reload()
   })
}