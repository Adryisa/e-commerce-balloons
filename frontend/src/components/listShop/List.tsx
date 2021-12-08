import React from 'react'
import Balloon from '../../interfaces/balloonsInterface'
import { useDispatch, useSelector } from 'react-redux'
import './list.scss'
import { rootState } from '../../redux/reducers'
import cart from '../../assets/cart-add.svg'
import { useParams } from 'react-router'
import { addToCart } from '../../redux/actions/actionCreators'

const List = ({balloon} : {balloon: Balloon}) => {

    const balloonSingle = useSelector((store: rootState) => {
        return store.cart
    })

    const { id } = useParams()

    const dispatch = useDispatch()

    function handleAdd(balloon: any) {
        dispatch(addToCart(id, balloon))
        console.log('im clicked')
    }


    return (
        <div>
           <ul className='shop-list__list'>
                   <li className='shop-list__item'>
                    <div className='shop-list__item-img-container'>  
                    {/* <img src={balloon.img_url} alt="imagen globo" className='shop-list__item-img'/> */}
                    </div>
                    <p className='shop-list__item-text'>{balloon.size}</p>
                    <p className='shop-list__item-text'>{balloon.type}</p>
                    <p className='shop-list__item-text'>{balloon.color}</p>
                    <p className='shop-list__item-text'>Package: {balloon.package}</p>
                    <p className='shop-list__item-text'>Price: {balloon.price}€</p>
                    <button type='button'  onClick={() => handleAdd(balloon._id)}>ADD</button>
                   </li>
               </ul> 
        </div>
    )
}

export default List
