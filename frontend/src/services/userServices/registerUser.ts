import axios from 'axios'
import User from '../../interfaces/userInterface'

export default function registerUser(user: User) {
    const urlBase = 'http://localhost:3200/api'

  const response = axios.post(`${urlBase}/users`, { 
       name: user.name,
       lastname: user.lastname,
       email: user.email,
       password: user.password,
   }).then((result) => {
    localStorage.setItem('user', JSON.stringify(result.data.token))
       return result.data
   }).catch((err) => {throw new Error(err)})
   return response
}