import React from 'react'
import Balloon from '../../interfaces/balloonsInterface'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './list.scss'
import { rootState } from '../../redux/reducers'
import cart from '../../assets/cart-add.svg'
import { addToCart } from '../../redux/actions/actionCreators'


const List = ({balloon} : {balloon: Balloon}) => {

    const isLogged = useSelector((store: rootState) => {
        return store.user.cart
    })      

    const cartId = useSelector((store: rootState) => {
        return store.user.cart
    })

    const dispatch = useDispatch()

    const navigate = useNavigate() 

    function handleAdd(balloon: any) {
        if (isLogged) {
        dispatch(addToCart(cartId, balloon))
        } else {
            navigate('/login')
        }
   
    }


    return (
        <div>
           <ul className='shop-list__list'>
                   <li className='shop-list__item'>
                    <div className='shop-list__item-img-container'>  
                    <img src={balloon.img_url} alt="imagen globo" className='shop-list__item-img'/>
                    </div>
                    <div className='shop-list__text-container'>
                    <p className='shop-list__item-text'>Size: {balloon.size}</p>
                    <p className='shop-list__item-text'>{balloon.type}</p>
                    <p className='shop-list__item-text'>Color: {balloon.color}</p>
                    <p className='shop-list__item-text'>Pack: {balloon.package}</p>
                    <p className='shop-list__item-text'>Price: {balloon.price}€</p>
                    </div>

                   <img src={cart} alt="cart icon" onClick={() => handleAdd(balloon._id)} data-testid='add'/>
                   </li>
               </ul> 
        </div>
    )
}

export default List