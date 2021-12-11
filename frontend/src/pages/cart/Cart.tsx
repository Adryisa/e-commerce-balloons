import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreaseBalloon, deleteOnCart, increaseBalloon, loadCart } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'
import trash from '../../assets/trash.svg'
import Balloon from '../../interfaces/balloonsInterface'

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

    return (
        <section>
        <p className='page-title'>CART</p>
        <div className='bar'></div>
            {cart.balloons ? cart.balloons.map((balloon: any, key: number) => (
                <div key={key} className='cart-list'>
               <div className='cart-list__bar'>barrita verde</div>
                <img src={balloon.balloonId.img_url} alt='balloon' className='cart-list__img'/>
               <p className='cart-list__text'>Type: {''} {balloon.balloonId.type}</p>
               <p className='cart-list__text'>Color: {''} {balloon.balloonId.color }</p>
               <p className='cart-list__text'>Price: {''} {balloon.balloonId.price} €</p>
               <p className='cart-list__text'>{''} {balloon.amount}</p>
               <img className='cart-list__icon' src={minus} alt="minus icon" onClick={() => handleDecrease(balloon.balloonId._id)}/>
               <img className='cart-list__icon' src={plus} alt="plus icon"  onClick={() => handleIncrease(balloon.balloonId._id)}/>
               <img className='cart-list__icon' src={trash} alt="trash icon" onClick={() => handleDelete(balloon.balloonId._id)}/>
                </div>
            )) : <h2>Your cart is empty</h2> }
                  <p>
                Total price:
                {cart?.totalPrice}
                  </p>
                <button>PAY</button>
        </section>
    )
}

export default Cart
