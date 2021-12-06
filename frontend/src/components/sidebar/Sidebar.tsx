import React, { useState } from 'react';
import  {slide as Menu}  from 'react-burger-menu'
import './sidebar.scss'
import house from '../../assets/house.svg'
import balloon from '../../assets/ion_balloon-outline.svg'
import mail from '../../assets/mail.svg'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(false);
    const handleStateChange = (state: any) => setIsOpen(state.isOpen);

    return (
        <Menu 
      outerContainerId={'main'}
      width={250}
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)} 
      > 
        <div>     
         <img src={house} alt="home icon" className="slide__icon" />
    Home
        </div>
        <div>   
        <img src={balloon} alt="courses icon" className="slide__icon" />
    Courses
      </div>
      <div>     
      <img src={mail} alt="email" className="slide__icon" />
    Contact us
      </div>
        </Menu>
    )
}

export default Sidebar
