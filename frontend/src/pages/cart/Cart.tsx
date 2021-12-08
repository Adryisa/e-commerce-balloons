import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadCart } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'
import minus from '../../assets/plus.svg'
import plus from '../../assets/minus.svg'
import trash from '../../assets/trash.svg'

const Cart = () => {

    const cart = useSelector((store: rootState) => {
        return store.cart
    })

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCart(user.user.cart))
    }, [dispatch])

    return (
        <section>
        <p className=''>CART</p>
        <div className='bar'></div>
            {cart.balloons ? cart.balloons.map((balloon: any, key: number) => (
                <div key={key}>
                {/* <img src={balloon.balloonId.img_url} alt=balloon {balloon.balloonId.color} /> */}
                <div>barrita verde</div>
               <p>Type: {balloon.balloonId.type}</p>
               <p>Color: {balloon.balloonId.color }</p>
               <p>Price: {balloon.balloonId.price}</p>
               <img src={minus} alt="minus icon" />
               <p>{balloon.amount}</p>
               <img src={plus} alt="plus icon"/>
               <img src={trash} alt="trash icon" />
               <button>PAY</button>
                </div>
            )) : <h2>Your cart is empty</h2> }
        </section>
    )
}

export default Cart
