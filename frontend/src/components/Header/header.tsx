
import React from 'react'
import partyando from '../../assets/logoPartyando.svg'
import cart from '../../assets/cart.svg'
import logUser from '../../assets/user-logo.svg'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = () => {



        const user = JSON.parse(localStorage.getItem('user') || '{}')
        const cartPage = `/cart/${user.user.cart}`


    return (
        <header className='header'>
            <h1 className='header__title'>Partyando
            </h1>
            <div className='header__logo-container'>            
            <img src={partyando} alt="logo partyando events" className='header__title-logo'/>
            </div>

            <section className='header__login-cart'>
        {
            localStorage.getItem('user') ?  <Link to={cartPage} ><img src={cart} alt="ir al carrito" /></Link> : <p>Please log in to go to cart </p>

        } 
            <img src={logUser} alt="link para logearte" />
            </section>
        </header>
    )
}

export default Header;
