import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadCart } from '../../redux/actions/actionCreators'
import { rootState } from '../../redux/reducers'

const Cart = () => {

    const cart = useSelector((store: rootState) => {
        return store.cart
    })

    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCart(user.user.cart))
    }, [dispatch])

    console.log(cart)
    
    return (
        <section>
            {cart.balloons ? cart.balloons.map((balloon: any) => (
                <>
                {/* <img src={balloon.balloonId.img_url} alt=balloon {balloon.balloonId.color} /> */}

               <p>Type: {balloon.balloonId.type}</p>
               <p>Color: {balloon.balloonId.color}</p>
               <p>Price: {balloon.balloonId.price}</p>
               <div></div>
               <p>Amount: {balloon.amount}</p>

                </>
            )) : <h2>Your cart is empty</h2>}
        </section>
    )
}

export default Cart
