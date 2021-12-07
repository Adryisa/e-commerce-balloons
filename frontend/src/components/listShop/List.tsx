import React from 'react'
import Balloon from '../../interfaces/balloonsInterface'
import './list.scss'
import cart from '../../assets/cart-add.svg'

const List = ({balloon} : {balloon: Balloon}) => {
    return (
        <div>
           <ul className='shop-list__list'>
                   <li className='shop-list__item'>
                    <div className='shop-list__item-img-container'>  
                    <img src={balloon.img_url} alt="imagen globo" className='shop-list__item-img'/>
                    </div>
                    <p className='shop-list__item-text'>{balloon.size}</p>
                    <p className='shop-list__item-text'>{balloon.type}</p>
                    <p className='shop-list__item-text'>{balloon.color}</p>
                    <p className='shop-list__item-text'>Package: {balloon.package}</p>
                    <p className='shop-list__item-text'>Price: {balloon.price}€</p>
                    <img src={cart} alt="" />
                   </li>
               </ul> 
        </div>
    )
}

export default List
