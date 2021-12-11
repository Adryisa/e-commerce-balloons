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
       return result.data
   }).catch((err) => console.log(err))
   return response
}