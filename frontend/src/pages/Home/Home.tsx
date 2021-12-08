import React from 'react'
import './home.scss'
import Login from '../../components/login/Login'


const Home = () => {
    return (
        <section className='home'>
       <p className='secondary-title'> Find your products: </p> 
        <p className='bar'></p>
          <nav className='navigation'>
            <ul className='navigation__list'>
            <li className='navigation__list-item' >
                <img src='https://res.cloudinary.com/dcy6vi33h/image/upload/v1638197401/main/ballons_bqqvdr.webp' alt="balloons image" className='navigation__list-img'/>
               <p className='navigation__list-text'> Balloons</p>
            </li>
            <li className='navigation__list-item'> 
                <img src='https://res.cloudinary.com/dcy6vi33h/image/upload/v1638197401/main/skyballoons_i2ha5b.webp' alt="accesories image" className='navigation__list-img'/>
                <p className='navigation__list-text' >Accesories</p>
            </li>
            </ul>
        </nav>
        <Login />
        </section >

    )
}

export default Home
