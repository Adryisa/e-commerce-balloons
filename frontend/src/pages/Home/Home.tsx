import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom'
import Slider from '../../components/slider/Slider'

const Home = () => {
    return (
    <section className='home'>
       <p className='page-title-small'> Find your products: </p> 
        <p className='bar'></p>
          <nav className='navigation'>
            <ul className='navigation__list'>
                <Link to='/shop' className='navigation__link'>      
                <li className='navigation__list-item' >
                <img src='https://res.cloudinary.com/dcy6vi33h/image/upload/v1638197401/main/ballons_bqqvdr.webp' alt="balloons image" className='navigation__list-img' data-testid='2'/>
               <p className='navigation__list-text'> Balloons</p>
            </li>
            </Link>
            <li className='navigation__list-item' >
                <img src='https://res.cloudinary.com/dcy6vi33h/image/upload/v1639585973/main/yoksel-zok-H9Un6az4rno-unsplash_x07bre.jpg' alt="balloons image" className='navigation__list-img' data-testid='2'/>
               <p className='navigation__list-text'> Accesories</p>
            </li>
            </ul>
        </nav>
        <Slider /> 
        </section >

    )
}

export default Home
