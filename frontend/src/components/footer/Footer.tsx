import React from 'react'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__text'>&copy; Partyando Events</p>
            <div className='footer__social-media'>
                <img 
                src={instagram} 
                alt="instagram icon" 
                className="footer__social-media-icon"
                />
                <img 
                src={facebook} 
                alt="facebook icon" 
                className="footer__social-media-icon"
                />
                <img 
                src={twitter} 
                alt="twitter icon" 
                className="footer__social-media-icon"
                />
            </div>
        </footer>
    )
}

export default Footer
