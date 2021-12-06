
import React from 'react'
import partyando from '../../assets/logoPartyando.svg'
import cart from '../../assets/cart.svg'
import logUser from '../../assets/user-logo.svg'

const Header = () => {
    return (
        <header className='header'>
            <h1 className='header__title'>Partyando
            <img src={partyando} alt="logo partyando events" className='header__title-img'/>
            </h1>
            <section className='header__login-cart'>
            <img src={cart} alt="ir al carrito" />
            <img src={logUser} alt="link para logearte" />
            </section>
        </header>
    )
}

export default Header
