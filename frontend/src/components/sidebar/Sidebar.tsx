import React, { useState } from 'react';
import  {slide as Menu}  from 'react-burger-menu'
import './sidebar.scss'
import house from '../../assets/house.svg'
import balloon from '../../assets/ion_balloon-outline.svg'
import mail from '../../assets/mail.svg'
import { Link } from 'react-router-dom';
import LogOut from '../LogOut/logOut';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleStateChange = (state: any) => setIsOpen(state.isOpen);

    return (
        <Menu 
      outerContainerId={'main'}
      width={250}
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)} 
      > 
        <Link to='/'>     
         <img src={house} alt="home icon" className="slide__icon" />
    Home
        </Link>
        <Link to='/shop'>   
        <img src={balloon} alt="courses icon" className="slide__icon" />
    Balloons
      </Link >
      <div>     
      <img src={mail} alt="email" className="slide__icon" />
    Contact us
      </div>
      <LogOut /> 
        </Menu>
    )
}

export default Sidebar
