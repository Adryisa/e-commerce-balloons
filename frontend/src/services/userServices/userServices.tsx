import axios from "axios";
import userLogin from "../../interfaces/userLoginInterface";


export default function userServices() {
    function logIn(user: userLogin) { 
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