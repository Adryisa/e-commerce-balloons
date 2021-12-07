import React from 'react'
import Balloon from '../../interfaces/balloonsInterface'


const List = ({balloon} : {balloon: Balloon}) => {
    return (
        <div>
           <ul className='shop-list__list'>
                   <li className='shop-list__item'>
                    <img src={balloon.img_url} alt="imagen globo" className='shop-list__item-img'/>
                    <p className='shop-list__item-text'>{balloon.size}</p>
                    <p className='shop-list__item-text'>{balloon.type}</p>
                    <p className='shop-list__item-text'>{balloon.color}</p>
                    <p className='shop-list__item-text'>Package: {balloon.package}</p>
                    <p className='shop-list__item-text'>Price: {balloon.price}€</p>
                   </li>
               </ul> 
        </div>
    )
}

export default List
