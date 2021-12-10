
import React from 'react'
import partyando from '../../assets/logoPartyando.svg'
import cart from '../../assets/cart.svg'
import logUser from '../../assets/user-logo.svg'
import './header.scss'
import { Link } from 'react-router-dom'
import Nav from '../navigation/Nav'

const Header = () => {

        const user = JSON.parse(localStorage.getItem('user') || '{}')
        
    return (   
            <header className='header'>
            <h1 className='header__title'>Partyando
            </h1>
            <div className='header__logo-container'>            
            <img src={partyando} alt="logo partyando events" className='header__title-logo'/>
            </div>

        <section className='header__login-cart'>
            <Link to={'/login'}><img src={logUser} alt="link para logearte" /></Link>
    
        {
            localStorage.getItem('user') ?  <Link to={`/cart/${user.user.cart}`} ><img src={cart} alt="ir al carrito" /></Link> : <Link to={'/login'} ><img src={cart} alt="ir al carrito" /></Link> 

        } 
        </section>

            <Nav />
        </header>

    )
}

export default Header;
