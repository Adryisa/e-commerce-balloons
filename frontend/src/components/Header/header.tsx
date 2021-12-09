
import React from 'react'
import partyando from '../../assets/logoPartyando.svg'
import cart from '../../assets/cart.svg'
import logUser from '../../assets/user-logo.svg'
import './header.scss'
import { Link } from 'react-router-dom'

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
            <img src={logUser} alt="link para logearte" />
        {
            localStorage.getItem('user') ?  <Link to={`/cart/${user.user.cart}`} ><img src={cart} alt="ir al carrito" /></Link> : <p>Please log in to go to cart </p>

        } 
            </section>
        </header>
    )
}

export default Header;
