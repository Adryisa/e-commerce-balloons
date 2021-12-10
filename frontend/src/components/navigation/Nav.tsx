import React from 'react'
import { Link } from 'react-router-dom'
import house from '../../assets/house.svg'
import balloon from '../../assets/ion_balloon-outline.svg'
import mail from '../../assets/mail.svg'

const Nav = () => {
    return (
        <nav className='navigation-header'>
            <ul className='navigation-header__list'>
                <li className='navigation-header__item'>
                <Link to='/'>     
        <img src={house} alt="home icon" className='navigation-header__item-icon' />
         <p className='navigation-header__item-text'>Home</p> 
        </Link>
        <Link to='/shop'>   
        <img src={balloon} alt="courses icon" className='navigation-header__item-icon' />
        <p className='navigation-header__item-text'>Balloons</p> 
        </Link >
        <div>     
        <img src={mail} alt="email" className='navigation__item-icon' />
        <p className='navigation-header__item-text'>Contact us</p> 
        </div>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
