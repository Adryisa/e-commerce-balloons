import axios from "axios";
import User from '../../interfaces/userInterface'

export default function userServices() {
    function logIn(user: User) { 
        const urlBase = 'http://localhost:3200/api'

        axios.post(`${urlBase}/login`, {    email: user.email, password: user.password   }).then((result) => {
            localStorage.setItem('user', JSON.stringify(result.data))

            window.location.reload()
        }).catch((err) => console.log(err))
    }

    function logOut() {
        localStorage.removeItem('user')
        window.location.reload()
    }

    return {
        logIn, 
        logOut
    }
}