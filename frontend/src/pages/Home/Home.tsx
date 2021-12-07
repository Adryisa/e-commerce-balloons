import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './home.scss'
import SecondaryTitle from '../../components/second-title/SecondaryTitle'


const Home = () => {

const balloons = useSelector(store => store)
const dispatch = useDispatch()


// put an oncliclk on the image to go to shop list

    return (
        <section className='home'>
            <SecondaryTitle /> 
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
        </section >

    )
}

export default Home
