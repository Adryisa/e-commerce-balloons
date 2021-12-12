import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy, decreaseBalloon, deleteOnCart, increaseBalloon, loadCart } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import trash from '../../assets/trash.svg'
import Balloon from '../../interfaces/balloonsInterface'
import './cart.scss'

const Cart = () => {

    const cartId = useSelector((store: rootState) => {
        return store.user.cart
    })

    const cart = useSelector((store: rootState) => {
        return store.cart
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCart(cartId))
    }, [dispatch])

    function handleDelete(balloon: Balloon) {
        dispatch(deleteOnCart(cartId, balloon))
    }

    function handleIncrease(balloon: Balloon) {
        dispatch(increaseBalloon(cartId, balloon))
    }

    function handleDecrease(balloon: Balloon) {
        dispatch(decreaseBalloon(cartId, balloon))
    }

    function handleBuy() {
        dispatch(buy(cartId))
    }

    return (
        <section className='cart'>
        <p className='page-title'>CART</p>
        <div className='bar'></div>
        <div className='cart-list-container'>
            {cart.balloons ? cart.balloons.map((balloon: any, key: number) => (
            < React.Fragment key={key} >
            <div className='cart-item__bar' ></div>
            <div className='cart-item'>
               <img src={balloon.balloonId.img_url} alt='balloon' className='cart-item__img'/>  
               <div className='cart-item__text-container'>           
               <p className='cart-item__text'>Type: {balloon.balloonId.type}</p>
               <p className='cart-item__text'>Color: {balloon.balloonId.color }</p>
               <p className='cart-item__text'>Package: {balloon.balloonId.package}</p>
               <p className='cart-item__text'>Price: {balloon.balloonId.price} €</p>
               </div>      
               <div className='cart-item__icon-container'>    
                <div className='cart-item__icon-plus'>               
                <img className='cart-item__icon' src={minus} alt="minus icon" onClick={() => handleDecrease(balloon.balloonId._id)}/>
               <p className='cart-item__text'>{balloon.amount}</p>
               <img className='cart-item__icon' src={plus} alt="plus icon"  onClick={() => handleIncrease(balloon.balloonId._id)}/></div>           

               <img className='cart-item__icon-trash' src={trash} alt="trash icon" onClick={() => handleDelete(balloon.balloonId._id)}/>
               </div>

                </div>
                </ React.Fragment>
            )) : <h2 className='text'>Your cart is empty</h2> }
            
        </div>
        <div className='cart-item__bar' ></div>
            <p className='cart-list__pay'>
                Total price:
            </p>
                <button className='cart-list__button' onClick={() => handleBuy()}>PAY</button>
        </section>
    )
}

export default Cart
